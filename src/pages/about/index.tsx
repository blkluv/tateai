import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import * as config from '@/lib/config'
import { Layout } from '@/components/Layout/Layout'
import { Markdown } from '@/components/Markdown/Markdown'
import { markdownToHtml } from '@/server/markdown-to-html'
import styles from './styles.module.css'



const markdownContent = `
## About

Semantic search over any of interviews from Tate (since release). Transcripts may not be perfect (blame YouTube API's stringent ban on non-OAuth caption access lol).
This project uses basic Python scripting, a vector database and semantic knn-search.  
 
- [YouTube V3 API](https://developers.google.com/youtube/v3) - Fetches and processes videos from YouTube to use as transcript backend powering semantic search.
- [Milvus.io](https://milvus.io/) / [Zilliz](https://zilliz.com/) - vector DB backend storing video transcript data and powering semantic search for the frontend.
- [OpenAI's text-embedding-ada-002](https://openai.com/blog/new-and-improved-embedding-model/) - used in conjunction with vector DB. Allows client more tools beyond basic keyword search. 
Read more on [k-nearest-neighbor (KNN) algorithm](https://en.wikipedia.org//wiki/K-nearest_neighbors_algorithm).

Videos are transcribed, combined with associated metadata, and pre-processed. The transcipts are chunked and vectorized into a database by tokens 
and converted to text embeddings with ~ 16k dimensions. <i>There are limitations; for those who care more about this topic, read the
[Milvus documentation](https://milvus.io/docs/limitations.md#Dimensions-of-a-vector).</i>

## Next Steps & Feedback

Some of my plans to improve this project:
- Moving away from YouTube V3 API towards a faster transcribing solution. Whisper is good but expensive and pytube and other Python packages are probably going to be used
once the amoutn of video content exceeds a certain storage capacity.
- Adding visual elements to search experience (i.e. thumnbail generation specific to the exact timestamp) using Puppeteer or some other solution.

Feel free to send me feedback on [Twitter](https://twitter.com/vdutts7).

## Notice & License

- Follow me on Twitter [@vdutts7](https://twitter.com/vdutts7) for more content like this.

- Support my open source work by [sponsoring me](${config.githubSponsorsUrl}) before my API costs explode.

- Independently created. Not affiliated with [Andrew Tate](https://twitter.com/cobratate). Not affiliated with YouTube nor any of the companies mentioned above.
`

export default function AboutPage({
  content
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        <div className={styles.meta}>
          <h1 className={styles.title}>{config.title}</h1>
          <p className={styles.detail}>
            by <a></a>
            <a
                className='link'
                href={config.twitterUrl}
                title={`Twitter ${config.twitter}`}
                target='_blank'
                rel='noopener noreferrer'
              > @vdutts7
              </a>
          </p>
        </div>

        <Markdown content={content} />
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const content = await markdownToHtml(markdownContent)

  return {
    props: {
      content
    }
  }
}

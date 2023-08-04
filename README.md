
 <div align="center">
    <img src="https://github.com/vdutts7/dump/blob/main/tate-talks-1.jpeg" alt="Logo" width="80" height="80">
    <img src="https://github.com/vdutts7/dump/blob/main/youtube-logo.png" alt="Logo" width="100" height="67">
    <img src="https://github.com/vdutts7/dump/blob/main/openai-logo.png" alt="Logo" width="67" height="67">
    <h1 align="center">
        Tate Talks: Top G AI Search
    </h1>
    <p align="center"> 
        <i><b>AI-Powered semantic search over hours of YouTube podcasts and interviews from Andrew Tate 🚬💸💬</b></i>
        <br/> 
    </p>

[![Website][website]][website-url]
[![Github][github]][github-url]

 </div>
 <img src="https://github.com/vdutts7/dump/blob/main/tate-talks-2.gif"/> 

<br/>

## Table of Contents

<ol>
    <a href="#about">📝 About</a>
        <ul>
        </ul>
    <a href="#how-to-build">💻 How to build</a>
    <a href="#next-steps">🚀 Next steps</a> 
       <ul>
        </ul>
    <a href="#tools-used">🔧 Tools used</a>
        <ul>
        </ul>
    <a href="#contact">👤 Contact</a>
  </ol>

<br/>

## 📝About
AI semantic search over hours of podcasts and interviews on YouTube from Andrew Tate (since release). Transcripts may not be perfect (blame YouTube API's stringent ban on non-OAuth caption access lol).

This project uses basic Python scripts, a vector database, and a semantic k-nearest search (KNN).
- [YouTube V3 API](https://developers.google.com/youtube/v3) - Fetches and processes videos from YouTube to use as transcript backend powering semantic search.
- [Milvus.io](https://milvus.io/) / [Zilliz](https://zilliz.com/) - vector DB backend storing video transcript data and powering semantic search for the frontend.
- [OpenAI's text-embedding-ada-002](https://openai.com/blog/new-and-improved-embedding-model/) - used in conjunction with vector DB. Allows client more tools beyond basic keyword search.
  Read more on [k-nearest-neighbor (KNN) algorithm](https://en.wikipedia.org//wiki/K-nearest_neighbors_algorithm).

Videos are transcribed using some hacky Python scripts, combined with associated metadata, and pre-processed (cleaned). The transcipts are chunked and vectorized into a database by tokens and converted to text embeddings with ~ 16k dimensions. <i>There are limitations; for those who care more about this topic, read the [Milvus documentation](https://milvus.io/docs/limitations.md#Dimensions-of-a-vector).</i>


<br/>

## 💻How to Build
- Fine-tuned OpenAI's `davinci-003` model (via `GPT-3 API`) and pyTorch
- Basic RLHF using:
  - outside training datasets sourced from YouTube, Wikipedia, old Tweets
  - vectorized embeddings of interview transcripts and long format dialogue from videos, speeches, publications
  - Processed layers weights via Weights & Biases
  - Prompt engineered inputs for engaging + realistic conversation based on actual celebrity's style of speaking
- Backend via FastAPI
- User authentication via Firebase
- React frontend with TailwindCSS styling

<br/>

## 🚀Next Steps
Some of my plans to improve this project:

- Moving away from YouTube V3 API towards a faster transcribing solution. [Whisper](https://openai.com/research/whisper) is good but expensive and pytube and other Python packages are probably going to be used once the amount of video content exceeds a certain storage capacity.
- Adding visual elements to search experience (i.e. thumnbail generation specific to the exact timestamp) using Puppeteer or some other solution.

Feel free to send me feedback on [Twitter](https://twitter.com/vdutts7).

<br/>


## 🔧Tools Used
[![python][python]][python-url]
[![YouTubeV3API][youtubev3api]][youtubev3api-url]
[![OpenAI][openai]][openai-url]
[![Milvus][milvus]][milvus-url]
[![Next][next]][next-url]
[![Tailwind CSS][tailwindcss]][tailwindcss-url]
[![Vercel][vercel]][vercel-url]


<br/>

## 👤Contact

[![Email][email]][email-url]
[![Twitter][twitter]][twitter-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[python]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[python-url]: https://www.python.org/
[next]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[youtubev3api]: https://img.shields.io/badge/YouTube_API_v3-FF0000?style=for-the-badge&logo=youtube&logoColor=white
[youtubev3api-url]: https://developers.google.com/youtube/v3
[tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=skyblue&color=0A192F
[tailwindcss-url]: https://tailwindcss.com/
[openai]: https://img.shields.io/badge/OpenAI%20ada--002%20GPT-0058A0?style=for-the-badge&logo=openai&logoColor=white&color=4aa481
[openai-url]: https://openai.com/
[milvus]: https://img.shields.io/badge/Milvus-DD0031?style=for-the-badge&logo=https://github.com/vdutts7/ai-topg-searchbot/blob/main/public/milvus.png&color=00d5ff
[milvus-url]: https://milvus.io/
[typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[vercel]: https://img.shields.io/badge/Vercel-FFFFFF?style=for-the-badge&logo=Vercel&logoColor=white&color=black
[vercel-url]: https://Vercel.com/

[website]: https://img.shields.io/badge/🔗Website-7f18ff?style=for-the-badge
[website-url]: https://tate-talks.vercel.app/
[github]: https://img.shields.io/badge/💻Github-000000?style=for-the-badge
[github-url]: https://github.com/vdutts7/tate-talks/
[email]: https://img.shields.io/badge/me@vdutts7.com-FFCA28?style=for-the-badge&logo=Gmail&logoColor=00bbff&color=black
[email-url]: #
[twitter]: https://img.shields.io/badge/Twitter-FFCA28?style=for-the-badge&logo=Twitter&logoColor=00bbff&color=black
[twitter-url]: https://twitter.com/vdutts7/

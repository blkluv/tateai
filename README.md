<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://github.com/vdutts7/ai-topg-searchbot/blob/main/public/social.jpg" alt="Logo" width="80" height="80">
    <img src="https://github.com/vdutts7/ai-topg-searchbot/blob/main/public/youtube.png" alt="Logo" width="100" height="67">
    <img src="https://github.com/vdutts7/yt-chat-mkbhd/blob/main/public/openai.png" alt="Logo" width="67" height="67">
  
  </a>
  <h2 align="center">Top G AI Search </h2> <p align="center"> AI-Powered semantic search over hours of podcasts and interviews on YouTube from Andrew Tate 🚬💸💬  
<br /> <a href=https://tate-talks.vercel.app/>LINK</a>  </p> </div> <p align="center"> <img src="https://github.com/vdutts7/ai-topg-searchbot/blob/main/public/aitopg.gif"/> </p>  


<!-- TABLE OF CONTENTS -->
## Table of Contents
  <ol>
    <a href="#about">📝 About</a>
        <ul>
        </ul>
    <a href="#next-steps">🚀 Next steps</a> 
       <ul>
        </ul>
    <a href="#tools-used">🔧 Tools used</a>
        <ul>
        </ul>
    <a href="#contact">👤 Contact</a>
  </ol>
<br />

<!-- ABOUT -->
## 📝 About

AI semantic search over hours of podcasts and interviews on YouTube from Andrew Tate (since release). Transcripts may not be perfect (blame YouTube API's stringent ban on non-OAuth caption access lol).
This project uses basic Python scripts, a vector database, and a semantic k-nearest search (KNN).  

- [YouTube V3 API](https://developers.google.com/youtube/v3) - Fetches and processes videos from YouTube to use as transcript backend powering semantic search.
- [Milvus.io](https://milvus.io/) / [Zilliz](https://zilliz.com/) - vector DB backend storing video transcript data and powering semantic search for the frontend.
- [OpenAI's text-embedding-ada-002](https://openai.com/blog/new-and-improved-embedding-model/) - used in conjunction with vector DB. Allows client more tools beyond basic keyword search. 
Read more on [k-nearest-neighbor (KNN) algorithm](https://en.wikipedia.org//wiki/K-nearest_neighbors_algorithm).

Videos are transcribed using some hacky Python scripts, combined with associated metadata, and pre-processed (cleaned). The transcipts are chunked and vectorized into a database by tokens and converted to text embeddings with ~ 16k dimensions. <i>There are limitations; for those who care more about this topic, read the [Milvus documentation](https://milvus.io/docs/limitations.md#Dimensions-of-a-vector).</i>
   

## 🚀 Next steps

Some of my plans to improve this project:
- Moving away from YouTube V3 API towards a faster transcribing solution. [Whisper](https://openai.com/research/whisper) is good but expensive and pytube and other Python packages are probably going to be used once the amount of video content exceeds a certain storage capacity.
- Adding visual elements to search experience (i.e. thumnbail generation specific to the exact timestamp) using Puppeteer or some other solution.

Feel free to send me feedback on [Twitter](https://twitter.com/vdutts7).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- BUILT WITH -->
## 🔧 Tools used
[![Next][Next]][Next-url]
[![OpenAI][OpenAI]][OpenAI-url]
[![Milvus][Milvus]][Milvus-url]
[![YouTubeV3API][YouTubeV3API]][YouTubeV3API-url]
[![Tailwind CSS][TailwindCSS]][TailwindCSS-url]
[![Vercel][Vercel]][Vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## 👤 Contact

`me@vdutts7.com` 

🔗 Project Link: `https://github.com/vdutts7/ai-topg-searchbot`

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Python]: https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54
[Python-url]: https://www.python.org/

[Next]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[YouTubeV3API]: https://img.shields.io/badge/YouTube_V3_API-DD0031?style=for-the-badge&logo=https://github.com/vdutts7/ai-topg-searchbot/blob/main/public/youtube.png&color=ffffff
[YouTubeV3API-url]: https://developers.google.com/youtube/v3

[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=skyblue&color=0A192F
[TailwindCSS-url]: https://tailwindcss.com/

[OpenAI]: https://img.shields.io/badge/OpenAI%20ada--002%20GPT-0058A0?style=for-the-badge&logo=openai&logoColor=white&color=4aa481
[OpenAI-url]: https://openai.com/

[Milvus]: https://img.shields.io/badge/Milvus-DD0031?style=for-the-badge&logo=https://github.com/vdutts7/ai-topg-searchbot/blob/main/public/milvus.png&color=00d5ff
[Milvus-url]: https://milvus.io/

[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/

[Vercel]: https://img.shields.io/badge/Vercel-FFFFFF?style=for-the-badge&logo=Vercel&logoColor=white&color=black
[Vercel-url]: https://Vercel.com/

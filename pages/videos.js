import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src = "/videos.png" alt="" width="1500" height="100"></img>

      <main>
        <h1 className="title">
          VIDEOS
        </h1>
        <p className="description">
        </p> 
        
        <div className="grid">
         <a href="/https://youtu.be/Dpq_g8zLQPc" className="card">
           <img src = "/videomac.png" alt="" width="1500" height="100"></img>
            <h3>Mac de Marco: Lollapalooza 2018 &rarr;</h3>
          </a>

          <a href="https://youtu.be/toklNeEB9To" className="card">
            <h3>Lorde: corona capital 2018: https://youtu.be/toklNeEB9To&rarr;</h3>
            <img src = "/videolorde.png" alt="" width="1500" height="100"></img>
          </a>
          <a
            href="https://youtu.be/RjQZd8p-eBM"
            className="card"
          >
            <h3>Radiohead  &rarr;</h3>
            <p>live</p>
            <img src = "/videoradio.png" alt="" width="1500" height="100"></img>
          </a>

          <a
            href="https://youtu.be/2bOigld3D1k"
            className="card"
          >
            <h3> &rarr;</h3>


            <p>  
            </p>Phoebe Bridgers tiny desk, 2020
            <img src = "/videophoebe.png" alt="" width="1500" height="100"></img>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://youtu.be/2bOigld3D1k"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
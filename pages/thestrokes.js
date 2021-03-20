import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Strokes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src = "/ts1" alt="" width="1500" height="100"></img>

      <main>
        <h1 className="title">
          THE STROKES
        </h1>
        <p className="description">
        </p> 
        
        <div className="grid">
          <a href="/thestrokes" className="card">
            <img src = "/thestrokes4.png" alt="" width="1500" height="100"></img>
            <h3> &rarr;</h3>
            <p></p>
          </a>

          <a href="thestrokes" className="card">
            <img src = "/thestrokes2.png" alt="" width="1500" height="100"></img>
            <h3>Album favorito &rarr;</h3>
            <p>The New Abnormal (2020)</p>
          </a>

          <a
            href="spotify:album:2xkZV2Hl1Omi8rk2D7t5lN"
            className="card"
          >
            <h3>Spotify link&rarr;</h3>
            <img src = "/thestrokes3.png" alt="" width="200" height="50"></img>
            <p>https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V?si=bjsBpDmnTKWcd3CTwBNsnQ</p>
          </a>

          <a
            href="https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V?si=bjsBpDmnTKWcd3CTwBNsnQ"
            className="card"
          >
            <h3>género &rarr;</h3>
            <p>
              indie rock, garage rock
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
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
          text-decoration: bold;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 6rem;
          color: #000080
          font family: ['Merriweather', 'serif']
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

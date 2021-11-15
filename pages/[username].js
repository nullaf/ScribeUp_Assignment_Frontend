import Head from 'next/head';
import { useRouter } from 'next/router';

import { API_URL } from '../config/constants';
import useSWR from 'swr';
import fetcher from '../lib/fetch';

import 'react-circular-progressbar/dist/styles.css';

import { Typography, Grid, CircularProgress } from '@mui/material';

import TrialCardComponent from '../components/TrialCardComponent';

export default function App() {
  const router = useRouter();
  const { username } = router.query;

  const { data, error } = useSWR(
    username ? `${API_URL}/${username}` : null,
    fetcher
  );

  if (error)
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Typography variant="h1">An error occurred.</Typography>
        <Typography variant="h2">{error.message}</Typography>
      </div>
    );
  if (!data)
    return (
      <div
        style={{
          display: 'flex',
          position: 'static',
          height: '100%',
          width: '100%',
        }}
      >
        <CircularProgress
          size={50}
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
    );

  return (
    <div>
      <style jsx global>{`
        body {
          background: #f1f1f1;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
        }

        img {
          float: left;
          width: 10rem;
          height: 7rem;
          object-fit: scale-down;
          margin-bottom: 3rem;
        }
        .card {
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 100%;
          margin: 1rem;
          padding: 1rem;
          text-align: center;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 3rem;
          transition: color 0.15s ease, border-color 0.15s ease;
          max-width: 500px;
          min-width: 250px;
          justify-content: center;
          align-items: center;
          background-color: #f8f8f8;
        }

        .card:hover {
          border-color: #0070f3;
          cursor: pointer;
        }
      `}</style>
      <Head>
        <title>ScribeUp Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid
          spacing={4}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {data?.map((trial) => {
            return (
              <TrialCardComponent
                trial={trial}
                key={trial.name + Math.random()}
              />
            );
          })}
        </Grid>
      </main>
    </div>
  );
}

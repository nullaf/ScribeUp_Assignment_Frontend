import Link from 'next/link';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import { Typography, Grid } from '@mui/material';

const TrialCardComponent = ({ trial }) => {
  return (
    <Grid item xs="auto">
      <Link href={trial.url} passHref>
        <div className={'card'}>
          <img src={trial.logo} alt={`${trial.name} Logo}`} />
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbarWithChildren
              value={trial.length - trial.remaining}
              maxValue={trial.length}
              strokeWidth={10}
              text={trial.remaining.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
              styles={{
                path: {
                  stroke: `rgba(62, 152, 199, ${
                    0.4 * (trial.remaining / trial.length) + 0.6
                  })`,
                },

                text: {
                  fill: '#080808',
                  fontWeight: 'bold',
                },
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: '1.4rem',
                    fontWeight: '400',
                  }}
                >
                  Remaining
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: '1.4rem',
                    fontWeight: '400',
                  }}
                >
                  Days
                </Typography>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <Typography variant="h5" style={{ marginTop: '1.5rem' }}>
            {trial.name}
          </Typography>
        </div>
      </Link>
    </Grid>
  );
};

export default TrialCardComponent;

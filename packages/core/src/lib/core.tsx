import { useEffect } from 'react';

import styles from './core.module.css';

export function Core() {
  useEffect(() => {
    console.log('123');
  }, []);
  return (
    <div className={styles['container']}>
      <h1>Welcome to Core!</h1>
    </div>
  );
}

export default Core;

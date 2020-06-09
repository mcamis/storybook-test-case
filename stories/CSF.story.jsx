import * as React from 'react';

const Foo = () => <h1>Nice!</h1>;

export default {
  title: 'CSF Test',
  component: Foo,
};

export const CSF = () => (
  <section>
    <Foo />
  </section>
);

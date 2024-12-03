import React, { useRef, useState } from 'react';
import { Button, Tour } from 'antd';
import CalendarF from './Calendar';
import CardF from './Card';
import ImageF from './Image';
const TourF = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Know what today is)',
      description: <CalendarF />,
      target: null,
    },
    {
      title: 'Do you know about arctic foxes?)',
      description: <CardF />,
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Did you drink coffee today?',
      description: <ImageF />,
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        About
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default TourF;
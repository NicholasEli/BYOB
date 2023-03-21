import { Fragment, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { Location, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Section from './components/Section.js';
import Footer from './components/Footer.js';
import Loading from './components/Loading.js';

const sections = [
  {
    theme: '',
    layout: '',
    project: null,
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    subTitle: null,
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    button: null,
    image: './rich-man.jpg',
    watermark: true,
  },
  {
    theme: 'dark',
    layout: 'reversed',
    project: {
      title: 'PROJECT: Lorem Ipsum',
      text: 'LOREM IPSUM, LI',
    },
    title: null,
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    button: {
      text: 'View More',
      url: '/',
      newWindow: true,
    },
    image: './man-accounting.jpg',
    watermark: false,
  },
  {
    theme: 'dark',
    layout: '',
    project: {
      title: 'PROJECT: Lorem Ipsum',
      text: 'LOREM IPSUM, LI',
    },
    title: null,
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    button: {
      text: 'View More',
      url: '/',
      newWindow: true,
    },
    video: './woman-money-fan.mp4',
    image: null,
    watermark: false,
  },
  {
    theme: '',
    layout: 'reversed',
    project: {
      title: 'PROJECT: Lorem Ipsum',
      text: 'LOREM IPSUM, LI',
    },
    title: null,
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    button: {
      text: 'View More',
      url: '/',
      newWindow: true,
    },
    image: './money-couple.jpg',
    watermark: false,
  },
  {
    theme: 'dark',
    layout: '',
    project: {
      title: 'PROJECT: Lorem Ipsum',
      text: 'LOREM IPSUM, LI',
    },
    title: null,
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    button: {
      text: 'View More',
      url: '/',
      newWindow: true,
    },
    image: './man-phone-1.jpg',
    watermark: false,
  },
];

export default function App(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <Fragment>
      <Header />
      <main>
        <Banner />
        {sections.map((section, index) => {
          return <Section key={index} {...section} />;
        })}
      </main>
      <Footer />
      {loading && <Loading />}
    </Fragment>
  );
}

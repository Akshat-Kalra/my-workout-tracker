import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../pages/Home.css'
import Exercise from '../Exercise';
import BasicLineChart from '../components/Line';
import GymHeatmap from '../components/Tracker';
import data from '../data';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/Progress';


const Home = () => {

  const addWorkout = () => {
    navigate('/logger');
  }

  return (
      
      <div className='container'>
        <Header />



        <section className='welcome-section'>
          <h2>Welcome to your Workout Tracker</h2>
          <button onClick={addWorkout} className='add-workout-button'>Add Workout</button>
          <button onClick={addWorkout} className='add-workout-button'>Delete Workout</button>
        </section>

        
      </div>

        // {/* <section className='graph-section'>
        //   <h3>Progress</h3>
        //   <BasicLineChart />
        // </section> */}
  );
};

export default Home;
import React from 'react';
//import {useState} from 'react';
import Layout from '../../components/Layout/Layout.js';
import pic from '../../assets/images/welcome.jpg';

const Home = () => {
 //const [click, setClick] = useState(0)
  return (
        <Layout> 
        <div>
        <div>Hi, welcome to this page!</div>
        <div><img src={pic} /></div>
        </div>
        </Layout>

        //<p>You have clicked {click} times.</p>
        //<button onClick = {() => setClick(click + 1)}>Increment</button>
        //<button onClick = {() => setClick(click - 1)}>Decrement</button>
    );
    }
    export default Home;
"use client";

import React from 'react';
import Link from 'next/link';
import {
  MessagesSquare,
  Music,
  ImageIcon,
  VideoIcon,
  Code,
  Speech,
} from "lucide-react";
import { Button } from './ui/button';
import { useAuth } from '@clerk/nextjs';
const ProgramHighlights = () => {
  const { isSignedIn } = useAuth();
  return (
    <section className="s2" id="programhighlights">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs">
            {/*<div className="landing_title">
              <h1 className="ltitle"><center>Program Highlights</center></h1>
              </div>*/}
          </div>
        </div>
              <br></br><br></br>

        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs  ">
            <div className="learning_card_grid ">
              <LearningCard
                image="/chst p.jpeg"
                title="Conversation"
                description="Online learning " 
                iconType="MessagesSquare"            />
              <LearningCard
                image="/image p.jpg"
                title="Image Generation "
                description="Resume &hfhshdhsd" 
                iconType="ImageIcon"             />
              <LearningCard
                image="/music pp.jpg"
                title="Music Generation"
                description="Award winning faculties."
                iconType="Music"              />
            </div>
          </div>
        </div>
        <br></br><br></br>


        <div className="row ">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs  ">
            <div className="learning_card_grid ">
            <LearningCard
                image="/video p.jpg"
                title="Video Generation"
                description="Online learning " 
                iconType="VideoIcon"              />
              <LearningCard
                image="/code p.jpg"
                title="Code Generation "
                description="Resume &hfhshdhsd" 
                iconType="Code"              />
              <LearningCard
                image="speech ppp.jpg"
                title="Speech Generation"
                description="Award winning faculties." 
                iconType="Speech"            />
        
              </div>
          </div>
          <br></br><br></br>
        </div>


       
        <div className=" p-10 flex flex-col items-center justify-center ">
        <div className="text-sm md:text-xl font-light text-black">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create content using our AI Models
      </div>
      <br></br>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button ="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Explore Now
          </Button>
          </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal"></div>
        
      </div>
  
      </div>
    </section>
    
  );
  
};



const LearningCard: React.FC<{ image: string; title: string; description: string; iconType?:string ;}> = ({
    image,
    title,
    description,
    iconType
    
  }) => {
    const getIcon = () => {
      switch (iconType) {
        case 'MessagesSquare':
          return <MessagesSquare size={30} color="purple" />;
        case 'Music':
          return <Music size={30} color="red" />;
        case 'ImageIcon':
          return <ImageIcon size={30} color="brown" />;
        case 'VideoIcon':
          return <VideoIcon size={30} color="orange" />;
        case 'Code':
          return <Code size={30} color="green" />;
        case 'Speech':
          return <Speech size={30} color="blue" />;
        default:
          return null; // Return null for unsupported icon types
      }
    };
  return (
    <div className="learning_card">
      <img className="img-fluid" src={image} alt={title} loading="lazy" width="316px" height="212px" /><br></br>
      <div className="learning-info">
        <div className="roundbg bg-4">
          <i className="fa fa-leanpub"></i>
          {getIcon()}
       
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h2 className='card-title'>{title}</h2>
        </div>
        {/<p>{description}</p>/}
      </div>
      
      
    </div>
  );
};

export default ProgramHighlights
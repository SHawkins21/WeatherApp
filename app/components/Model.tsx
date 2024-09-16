"use client";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import React, { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import CityItem from "./CityItem";
import { useModalStore } from "../store/modalStore";
import { saveLocation } from "../api/weather";

const Model = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const toggle = useModalStore((state) => state.toggle);
  
  return (
    <div className="absolute w-full h-full text-black ">
      <div className="absolute bottom-0 flex bg-white text-black w-full  h-1/5 rounded-t-2xl">
        <div className="absolute w-full flex justify-center justify-items-center">
          <button
            onClick={toggle}
            className="absolute top-0 "
          >
            <MdOutlineKeyboardDoubleArrowUp className=" size-5" />
          </button>
          <div className="p-5">Change City</div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className="absolute w-full mx-auto h-screen rounded-t-2xl bg-white">
            <m.div
              initial={{ opacity: 0 }}

              animate={{
                transition: {
                  duration: 2, ease: "easeInOut"
                },
              }}
              exit={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              
              className=""
            ></m.div>

            <div className="">
              <div className="flex justify-items-end ">
                <button
                  onClick={toggle}
                  className="absolute w-full text-darkpurple"
                >
                  <AiOutlineClose className="absolute size-10 m-3 right-0 justify-end" />
                </button>
              </div>
              <div className=" w-full mt-14 h-3/4 ">
                {/* Map Start*/}
                <FormLocation/>

       
                {/* Map End*/}
              </div>
              <div>
                {/* { locations &&
                  locations.map((location, index) => (
                    <CityItem key={index} {...location} sendCity={sendCity}  />
                  ))
                } */}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Model;

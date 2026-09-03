import React from 'react';
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  console.log(props.companyName)
    return (
        
        <div className="w-70 h-80 m-3 bg-white rounded-3xl ">
          {/*Logo and Button*/}
          <div className="flex justify-between p-5 text-mauve-400">
            <div className="h-9 w-9 border rounded-full flex items-center justify-center ">
            <img className=" h-8 w-8 rounded-full object-cover" src={props.brandLogo}></img>
            </div>
            <div className="h-8 w-18 border border-mauve-400 bg-white  rounded-2xl ">
              <button className="flex justify-center pl-3 pt-1 text-sm">Save <Bookmark className="size-4 mt-1" /></button>
            </div>
          </div>

          {/*heading and buttons*/}
          <div className="mx-6 mt-3">
            <h1 className="font-bold ">{props.companyName}<span className="text-mauve-400 text-xs ml-1">{props.datePosted}</span></h1>
            <h2 className="font-bold text-lg flex flex-wrap mt-0">{props.post}</h2>

            <div className="flex  gap-1 text-center mt-2 font-medium">
              <span className=" border-mauve-400 bg-mauve-200 rounded-sm h-6 w-17">
                <button className="text-xs ">{props.tag1}</button>
              </span>
              <span className="border-mauve-400 rounded-sm bg-mauve-200 h-6 w-18">
                <button className="text-xs " >{props.tag2}</button>
              </span>
            </div>
          </div>

          {/*Button and Money*/}
          <div className="border-t border-mauve-300 flex justify-between mt-15 ml-6 mr-5">
          <div className="flex flex-col">
            <h1 className="font-bold">{props.pay}</h1>
            <h2 className="text-mauve-500 text-xs">{props.location}</h2>
          </div>
          <button className="bg-gray-900 text-white rounded-sm h-9 w-18 text-xs mt-3">Apply now</button>
        </div>
        </div>
    )
}

export default Card;
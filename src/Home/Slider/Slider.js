import React from 'react';

const Slider = () => {
    return (
        <div>
                <div className="carousel w-full">
  <div id="item1" className="carousel-item h-96 w-full">
    <img src="https://media.istockphoto.com/id/506061551/photo/laptop-on-white-table.jpg?s=612x612&w=0&k=20&c=VUhXE3jkNA_RdqdsjFVq1TX2aPymd6sj7uUoVlDzF4U=" className="w-full" alt=''/>
  </div> 
  <div id="item2" className="carousel-item h-96 w-full ">
    <img src="https://www.lklk.lk/storage/files/lk/1312/thumb-816x460-8a59f1dcf4f324854aeec613a9c30bf1.jpg" className="w-full" alt=''/>
  </div> 
  <div id="item3" className="carousel-item h-96 w-full">
    <img src="https://www.hpexclusive.com.bd/image/cache/catalog/laptop/du3024tu/15s-du3024tu-001-500x500.jpg" className="w-full" alt=''/>
  </div> 
  <div id="item4" className="carousel-item h-96 w-full">
    <img src="https://media.istockphoto.com/id/498569393/photo/windows-8-1-on-hp-pavilion-ultrabook.jpg?s=612x612&w=0&k=20&c=kmqDUy2J3YpPwp3vVJCIZnidDFc9BvYPWDD0Vnf4GzQ=" className="w-full" alt=''/>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Slider;
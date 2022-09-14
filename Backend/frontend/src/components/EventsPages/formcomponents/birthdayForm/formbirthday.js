import React from 'react'
import { useState } from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'




function Formbirthday() {
    // dance options start
    const [value, setvalue] = useState('')
    const  handleOnchange  =  val  => {
      setvalue(val)
    }
    const  options  = [
        { label:  'Folk', value:  'Folk'  },
        { label:  'Indian', value:  'Indian'  },
        { label:  'Western', value:  'Western'  },
      ]
      // dance option end

      // music options start
    const [musicvalue, setmusicvalue] = useState('')
    const handlemusicchange = val =>{
        setmusicvalue(val)
    }
    //music options end

    //photography option start

    const [photovalue , setphotovalue] = useState('')
    const handlePhotoChange = val =>{
        setphotovalue(val)
    }
    const PhotoOptions = [
        { label:  'Candid', value:  'Candid'  },
        { label:  'Regular Photography', value:  'Regular Photography'  },
        { label:  'Cinematography', value:  'Cinematography'  },
        { label:  'Video', value:  'Video'  },
        { label:  'Drone Video', value:  'Drone Video'  },
    ]

    //photography option end

    //decoration start
   
    const [decorationvalue, setdecorationvalue] = useState("")
    const handleOnchangedecoration = val =>{
        setdecorationvalue(val)
    }
    const decorationoptions = [
        { label:  'Regular Decoration', value:  'Regular Decoration'  },
        { label:  'Artificial Flowers Decoration', value:  'Artificial Flowers Decoration'  },
        { label:  'Indoor Decoration', value:  'Indoor Decoration'  },
        { label:  'Outdoor Decoration', value:  'Outdoor Decoration'  },
        { label:  'Lightning Decoration', value:  'Lightning Decoration'  }
    ]

    //decoration ends

    //Catering start
     const [foodvalue, setfoodvalue] = useState("")
     const handlefoodchange = val =>{
        setfoodvalue(val)
     }
     const foodtypes=[
        { label:  'North Indian', value:  'North Indian'  },
        { label:  'South Indian', value:  'South Indian'  },
        { label:  'Chats', value:  'Chats'  },
        { label:  'Chinese', value:  'Chinese'  },
        { label:  'Korean', value:  'Korean'  },
        { label:  'Mexican', value:  'Mexican'  },
        { label:  'Italian', value:  'Italian'  },
        { label:  'French', value:  'French'  },
        { label:  'Japanese', value:  'Japanese'  },
        { label:  'Russian', value:  'Russian'  },
        { label:  'Spanish', value:  'Spanish'  },

    ]
    
     
    //catering ends


    const [checkedMusic, setCheckedMusic] = useState(false);
    const [checkedVenue, setCheckedVenue] = useState(false);
    const [checkedDecoration, setCheckedDecoration] = useState(false)
  return (
    <div class="container my-5">
  <div class="card">
    <form>
     
      <div class="card-header py-4 px-5 bg-light border-0">
        <h4 class="mb-0 fw-bold">Birthday Event Booking</h4>
      </div>

     
      <div class="card-body px-5">


       
        <div class="row gx-xl-5">
          <div class="col-md-3">
            <h4>Shows :</h4>
            
          </div>

          <div class="col-md-9">
            {/* <div class="mb-3">
              <label for="exampleInput6" class="form-label"
                     >Street address</label
                >
              <input type="text" class="form-control" id="exampleInput6" />
            </div> */}

           
            <div class="row">
            </div>
          
           <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                  <label for="games"
                   class="form-check-label" value="" style={{marginRight:"15px"}}>Games </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="games"
                         />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="magic" 
                  class="form-check-label" value="" style={{marginRight:"15px"}}>Magic </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="magic"
                         />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="music" 
                  class="form-check-label" value="" style={{marginRight:"15px"}}>Music </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="music"
                         checked={checkedMusic}
                            onChange={() => {
                              setCheckedMusic(!checkedMusic);
                            }}
                         />
                </div>
              </div>
            </div>
            {checkedMusic && (
            <div class="row">
            <div class="mb-3">
                <div  className="preview-values">
                    <h4>Live Music</h4>
                    {musicvalue}
                  </div>

                  <MultiSelect
                   onChange={handlemusicchange}
                    options={options}
                  />
              </div>
              

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="dj" class="form-check-label" 
                  value="" style={{marginRight:"15px"}}>DJ </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="dj"
                         />
                </div>
              </div>
            </div>)}
           
              <div>
                <div  className="preview-values">
                    <h4>Dance</h4>
                    {value}
                  </div>

                  <MultiSelect
                   onChange={handleOnchange}
                    options={options}
                  />
              </div>
              
          </div>
        </div>

        <hr class="my-5" /> 

       {/* Decoration section */}

       <div class="row gx-xl-5">
          <div class="col-md-3">
            <h4>Decorations :</h4>
            
          </div>

          <div class="col-md-9">
     
           <div class="row">
           <div class="col-md-4">
              <div class="mb-3">
               <div className="preview-values">
                    <h4>Decoration</h4>
                    {decorationvalue}
                  </div>

                  <MultiSelect
                   onChange={handleOnchangedecoration}
                    options={decorationoptions}
                  />
              
              </div>
           </div>
              <div class="col-md-4">
                <div class="mb-3">
                <br/>
                  <label for="decoration" 
                  
                  class="form-check-label" value="" 
                  style={{marginRight:"15px"}}>Theme Decoration </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="decoration"
                         checked={checkedDecoration}
                            onChange={() => {
                              setCheckedDecoration(!checkedDecoration);
                            }}
                         />
                </div>
              </div>
              {checkedDecoration && (
            <div class="col-md-4">
           <div class="mb-3">
                <label for="exampleInput5" class="form-label"  
                       ></label
                  >
                <select 
                        id="exampleInput5"
                        class="form-select mb-3"
                        aria-label="Default select example"
                        >
                  <option selected value="1">Regular Decoration</option>
                  <option value="2">Real Flower Decoration</option>
                  <option value="3">Artificial Decoration</option>
                  <option value="4">Indoor Decoration</option>
                  <option value="5">Outdoor Decoration</option>
                  <option value="6">Lightning Decoration</option>
                </select>
              </div>
           </div>
            )}
            </div>
            
              
          </div>
        </div>

       {/* Decoration section end  */}

       <hr class="my-5" />

{/* catering start */}

<div class="row gx-xl-5">
 <div class="col-md-3">
   <h4>Catering :</h4>
   
 </div>

 <div class="col-md-9">
   
  <div class="row">
   <div class="col-md-4">
       <div class="mb-3">
       <div class="form-check">
          <input class="form-check-input" 
          type="radio" 
          name="flexRadioDefault" 
          id="flexRadioDefault"/>

          <label class="form-check-label" 
          for="flexRadioDefault"> Veg </label>
        </div>
       </div>
   </div>
   <div class="col-md-4">
       <div class="mb-3">
       <div class="form-check">
          <input class="form-check-input" 
          type="radio" 
          name="flexRadioDefault" 
          id="flexRadioDefault1"/>

          <label class="form-check-label" 
          for="flexRadioDefault1">Non-Veg </label>
        </div>
       </div>
   </div>
   <div class="col-md-4">
       <div class="mb-3">
       <div class="form-check">
          <input class="form-check-input" 
          type="radio" 
          name="flexRadioDefault" 
          id="flexRadioDefault2"/>

          <label class="form-check-label" 
          for="flexRadioDefault2"> Jain </label>
        </div>
       </div>
   </div>
   <div>
       <div  className="preview-values">
           <h4>Food Type </h4>
           {foodvalue}
         </div>

         <MultiSelect
          onChange={handlefoodchange}
           options={foodtypes}
         />
     </div>
  </div>
 </div>
</div>  


{/* catering ends  */}


        <hr class="my-5" />



         {/* other events start */}
         
         <div class="row gx-xl-5">
          <div class="col-md-3">
            <h4>Other Events :</h4>
            
          </div>

          <div class="col-md-9">
            
           <div class="row">
            <div class="col-md-4">
                <div class="mb-3">
                  <label for="invitation"
                   class="form-check-label" value="" style={{marginRight:"15px"}}>Physical invitation </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="invitation"
                         />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="beauty" 
                  class="form-check-label" value="" style={{marginRight:"15px"}}>Beauty </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="beauty"
                         />
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <label for="venue" 
                  class="form-check-label" value=" " style={{marginRight:"15px"}}>Venue </label>
                  <input
                         type="checkbox"
                         class="form-check-input"
                         id="venue"
                         checked={checkedVenue}
                            onChange={() => {
                              setCheckedVenue(!checkedVenue);
                            }}
                         />
                </div>
              </div>
            </div>
            
           
            {/* venue options start */}

            {checkedVenue && (
                <div>
            <div class="row">
             <div class="col-md-6">
             <div class="mb-3">
              <label for="exampleInput1" class="form-label"
                     >Venue 1 Name </label
                >
              <input type="text" class="form-control" id="exampleInput1" style={{maxWidth: "500px"}}/>
             </div>
             </div>   
             <div class="col-md-6">
             <div class="mb-3">
              <label for="exampleInput1" class="form-label"
                     >Venue 1 place</label
                >
              <input type="text" class="form-control" id="exampleInput1" style={{maxWidth: "500px"}}/>
             </div>
             </div> 
            </div>
            <div class="row">
             <div class="col-md-6">
             <div class="mb-3">
              <label for="exampleInput1" class="form-label"
                     >Venue 2 Name</label
                >
              <input type="text" class="form-control" id="exampleInput1" style={{maxWidth: "500px"}}/>
             </div>
             </div>   
             <div class="col-md-6">
             <div class="mb-3">
              <label for="exampleInput1" class="form-label"
                     >Venue 2 place</label
                >
              <input type="text" class="form-control" id="exampleInput1" style={{maxWidth: "500px"}}/>
             </div>
             </div> 
            </div>
            <div class="row">
             <div class="col-md-6">
             <div class="mb-3">
              <label for="exampleInput1" class="form-label"
                     >Venue 3 Name</label
                >
              <input type="text" class="form-control" id="exampleInput1" style={{maxWidth: "500px"}}/>
             </div>
             </div>   
             <div class="col-md-6">
             <div class="mb-3">
              <label for="exampleInput1" class="form-label"
                     >Venue 3 place</label
                >
              <input type="text" class="form-control" id="exampleInput1" style={{maxWidth: "500px"}}/>
             </div>
             </div> 
            </div>
            </div>
            )}


            {/* venue option end */}
              <div>
                <div  className="preview-values">
                    <h4>Photography</h4>
                    {photovalue}
                  </div>

                  <MultiSelect
                   onChange={handlePhotoChange}
                    options={PhotoOptions}
                  />
              </div>
              
          </div>
        </div>


         {/* other events end */}

         <hr class="my-5" />

        <div class="row gx-xl-5">
          <div class="col-md-4">
            <h4>Estimate Budget : </h4>
           
          </div>

          <div class="col-md-8">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleInput11" class="form-label"
                         >Minimun</label
                    >
                  <input
                         type="number"
                         class="form-control"
                         id="exampleInput11"
                         />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label for="exampleInput12" class="form-label"
                         >Maximum</label
                    >
                  <input
                         type="number"
                         class="form-control"
                         id="exampleInput12"
                         />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div class="card-footer text-end py-4 px-5 bg-light border-0">
        <button class="btn btn-link btn-rounded" data-ripple-color="primary">Cancel</button>
        <button type="submit" class="btn btn-primary btn-rounded">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default Formbirthday
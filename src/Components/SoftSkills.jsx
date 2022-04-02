import React from 'react'

const SoftSkills = () => {
    return (
      
       <section className='sskills-cnt row'> 
          <section className='soft-wrp col-6 pl-4'>
              <div className='py-4 '>
                  <h3 className='title-txt'>
                    <u>
                      My Soft Skills
                    </u>
                  </h3>
              </div>
              <section className='ul-cont d-flex justify-content-evenly py-3' >
                    <div className='ul-wrp  '>
                      <ul className='text-dark  '>
                          <li>Fast Learner</li>
                          <li>Entrepreneurial</li>
                          <li>Excelent Communicator</li>
                          <li>Well Traveled</li>
                      </ul>
                    </div>
                    <div className='ul-wrp'>
                      <ul >
                          <li>Self Starter</li>
                          <li>Team Player</li>
                          <li>Critical Thinker</li>
                          <li>Developer Brain </li>
                      </ul>
                    </div>
              </section>
            </section>
            <section className=' hob-wrp col-6 '>
                <div className='py-4'>
                      <h3 className='title-txt'>
                        <u>
                        My Hobbies
                        </u>
                      </h3>
                </div>
                <section className='ul-cont d-flex justify-content-evenly py-3' >
                  <div className='ul-wrp'>
                    <div className=''>
                      <ul>
                          <li>Playing Basketball</li>
                          <li>Solidity</li>
                          <li>Traveling</li>
                          <li>Learning</li>
                          <li>Video Games</li>
                          <li>Smart Homes</li>
                      </ul>
                    </div>
                  </div>
                  <div className='ul-wrp'>
                    <div className=''>
                      <ul >
                          <li>Reading Self Help Books</li>
                          <li>Music</li>
                          <li>Food</li>
                          <li>Get Togethers</li>
                          <li>Coding</li>
                          <li>Playing Volleyball</li>
                      </ul>
                    </div>
                  </div>
              </section>
          </section>
        </section>
    )
  }

  export default SoftSkills
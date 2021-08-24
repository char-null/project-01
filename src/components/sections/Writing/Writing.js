import React from 'react';
import Section from '../../../HOC/Section';

const Writing = () => {
    return (
      <Section id='writing'>
          
        <div className='container pt-2 pb-5'>
          <div className='section-header pt-5 pb-5 text-center'>
            <h3 className='section-title'>
              <span>Writing</span>
            </h3>
            <h6 className='section-subtitle mr-auto ml-auto'>
                Individualized quality care that meets the total needs of the
                patient Individualized quality care that quality care that
                Individualized quality care that meets the total.
            </h6>
          </div>
          <div className='section-content'>
            <div className='row'>
                <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
                    <form>
                        <input
                            type='text'
                            className='form-control rounded-0'
                            placeholder='Enter Title'
                        />
                    <div className='form-group'>
                        <textarea
                            className='form-control rounded-0'
                            rows='6'
                            placeholder='Enter Content'
                            
                        />
                    </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </Section>
    );
  };
  
  export default Writing;
  
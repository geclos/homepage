import Box from 'src/components/Box'
import React from 'react'

import styles from './index.module.scss'

const Newsletter = () => {
  return (
    <Box>
      <article>
        <h2>Subsribe to the Big Ideas Weekly</h2>
        <p>
          A no fuzz newsletter with the week's best reads about big ideas to understand the world better, delivered to you every Sunday morning.
          <br />
          <br />
          Get <a target='_blank' href='/what_i_have_been_reading_1'>a taste</a> of what you will get.
        </p>
        <div id="mc_embed_signup">
          <form action="https://gerardclos.us18.list-manage.com/subscribe/post?u=5ed8dd48337533c28c5cb7a89&amp;id=e7cffdd5b5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
            <div className={styles.form} id="mc_embed_signup_scroll">
              <div className={`mc-field-group ${styles.email}`}>
                <label htmlFor='mce-EMAIL'><small className={styles.strong}>Email Address </small></label>
                <div className={styles.inputs}>
                  <input type="email" placeholder="jon@winterfell.com" name="EMAIL" className='required email' id="mce-EMAIL" />
                  <div className='clear'>
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                  </div>
                </div>
              </div>
              <div id="mce-responses" className='clear'>
                <div className='response' id="mce-error-response" style={{ display: 'none' }} />
                <div className='response' id="mce-success-response" style={{ display: 'none' }} />
              </div>
              <div style={ {position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_5ed8dd48337533c28c5cb7a89_e7cffdd5b5" tabIndex="-1" defaultValue="" /></div>
            </div>
          </form>
        </div>
      </article>
    </Box>
  )
}

export default Newsletter

import React from 'react';
import './Publications.css';

const Publications = () => {
  return (
    <div className='publications-component'>
      <article className='cipher-article'>
        <h4 className='article-text'>The Business Executive’s Guide to Retaliatory Arrests</h4>
        <h6 className='article-text article-subheader'>January 7, 2019 | The Cipher Brief | 
          <a 
            href='https://www.thecipherbrief.com/experts/rob-dannenberg' 
            title='Cipher Brief articles by Rob Dannenberg' 
            target='_blank'
            rel='noopener noreferrer'
          >
          Rob Dannenberg
          </a>
        </h6>
        <p className='article-text article-paragraphs'>
            Russia’s willingness to detain a U.S. citizen in apparent retaliation for the recent case against Russian citizen Marina Butina, should serve as a warning to U.S. citizens who are traveling – without the benefit of diplomatic immunity –  of the risks in traveling to countries where the rule of law is dictated by geopolitical considerations. It’s a risk which current business and personal travelers should be aware of and one that is not likely to go away in the near term.
          </p>
          <p className='article-text article-paragraphs'>
            While there is never a completely “safe” time to travel to countries like Russia or China, the examples of Whelan, Canadian citizens Michael Spevor and former Canadian diplomat Michael Kovrig, both detained in recent weeks by Chinese authorities “on suspicion of endangering national security” should serve as a warning of just how real the risk can be.
          </p>
          <p className='article-text article-paragraphs'>
            The detention of the Canadians is presumed to be in retaliation for the arrest of Meng Wanzhou in Vancouver on December 1, 2018.  Meng was detained by the Canadians for extradition at the request of U.S. authorities. She is a prominent Chinese businesswoman, a senior executive at Huawei, a technology firm already under heavy U.S.-led pressure for suspected collection activity for Chinese intelligence.
          </p>
          <p className='article-text article-paragraphs'>
            No one should be surprised at China’s rapid retaliatory detention of the Canadians. The timing of Whelan’s detention is certainly not coincidental either and needs to be considered within the context of geopolitical risk in U.S.-Russian relations. At the moment, geopolitical considerations are paramount.
          </p>
          <p className='article-text article-paragraphs'>
            While no one would argue that Marina Butina is a figure of any consequence beyond her media notoriety, (she is certainly not the equivalent in stature of Meng), in the context of the free fall of U.S.-Russian relations and the abundance of headlines on the malfeasance and missteps of Russian intelligence operatives in recent months, it was only a matter of time before Putin ordered retaliatory measures for her detention.
          </p>
          <p className='article-text article-paragraphs'>
            Putin, a former intelligence officer, is likely a historian of the genre and knows there is a long history of non-combatants being caught up in spy games. Moreover, he is probably still stinging from the embarrassment of the June 2010 arrest of ten Russian “illegals” in the U.S. and their subsequent ‘spy swap’ for Russians who were arrested under charges of cooperation with western intelligence services.  (One of the illegals was Anna Chapman whose publicity following her arrest has led to a successful career in television and modeling in Russia).  This is not to make light of Whelan’s detention, which is quite serious, nor should we think that Putin is not capable of being disproportionately ruthless in these circumstances. Take for example, the case of the Ukrainian sailors detained in the Russian aggression in the Sea of Azov which resulted in President Trump cancelling his meeting with Putin at the recent G-20 summit in Buenos Aires.  Twenty-one of the twenty-four detained Ukrainian sailors have been transferred to Moscow’s notorious Lefortova Prison. The three wounded sailors are now incarcerated at the hospital wing of the equally notorious Matrosskaya Tishina prison.
          </p>
          <p className='article-text article-paragraphs'>
            Whelan will likely not face such a fate, at least not in the near term, with sustained media attention.  Though as Congress considers legislation to impose additional sanctions on Russia for the Russian Military Intelligence (GRU) nerve agent attack against former Russian spy Sergei Skripal in the UK last year, as well as for meddling in the U.S. mid-term elections, and perhaps even as a reaction to the Mueller investigation (if that leads to allegations of collusion in the near term) the Whelan case could quickly turn into a high-stakes game. Depending on events, don’t be surprised if another U.S. citizen is detained. Putin will have plenty of support for such escalation in the hardline community upon whose support he relies, and the Russian general public who are inundated with state-controlled media propaganda of western conspiracies against Russia.
          </p>
          <p className='article-text article-paragraphs'>
            In light of the risks highlighted by these recent detentions, what should western business travelers think about if they have planned business or personal travel to countries where the rule of law is trumped by geopolitics?
          </p>
          <p className='article-text article-paragraphs'>
            First, consider deferring travel until the geopolitical atmosphere improves.  Second, take steps to minimize your risk by carefully considering what technical equipment you take along with you. What may be considered benign in the West might not be viewed the same way in a hostile environment.  For example, does your computer or smartphone contain information which could be considered incriminating by a hostile regime?  In the case of Russia or China, saved news articles that are critical of the regime and are stored on your computer, or posts from “anti-regime” websites, could be incriminating.  Travelers should also consider email correspondence that they would not want to see in the possession of a hostile prosecutor, all of which could be considered ‘evidence’ of hostile intent. Encrypted correspondence, similarly so.
          </p>
          <p className='article-text article-paragraphs'>
            Is the purpose of your travel clearly articulated and documented? Is it affiliated with well-known institutions with a long record of travel to your destination?  Has an effort been made to register travel with the appropriate U.S. embassy or consulate?   While on the ground, are you prepared to undertake appropriate precautions to make sure you don’t violate any local laws, engage in illegal currency transactions or participate in the unauthorized purchase of articles of historical or cultural value? These can be common traps for business travelers.
          </p>
          <p className='article-text article-paragraphs'>
            Taking an unregistered GPS-capable device near a sensitive government facility can be considered an act of espionage in some countries. The location of those facilities may not always be apparent.
          </p>
          <p className='article-text article-paragraphs'>
            Geopolitical issues are a serious factor in international business travel. The days when carrying a U.S. or western passport or being engaged in a developmental business or NGO that provided some form of protection are long gone.  Be the prudent traveler who is aware of the risks and take appropriate actions.
          </p>
      </article>
      <hr></hr>
      <div className='cipher-links-container'>
        <a 
          href='https://www.thecipherbrief.com/experts/rob-dannenberg' 
          target='_blank' 
          rel='noopener noreferrer'
          className='cipher-links'
        > 
         Rob Dannenberg- Cipher Brief publications
        </a>
        <a 
          href='https://www.thecipherbrief.com/experts/michael-sulick' 
          target='_blank' 
          rel='noopener noreferrer'
          className='cipher-links'
        >
        Mike Sulick- Cipher Brief publications
        </a>
        <a 
          href='https://www.thecipherbrief.com/experts/paul-kolbe' 
          target='_blank' 
          rel='noopener noreferrer'
          className='cipher-links'
        >
        Paul Kolbe- Cipher Brief publications
        </a>
      </div>
    </div>
  )
}

export default Publications;
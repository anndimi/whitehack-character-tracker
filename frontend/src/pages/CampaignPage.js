import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../elements/Navbar'
import styled from 'styled-components'
import divider from '../assets/images/divider.png'
import { Divider } from '../styles/global'
import quilIcon from '../assets/icons/quil-icon.png'
import sealImg from '../assets/images/seal-img.png'
import StoryEntryModal from '../elements/StoryEntryModal'

const CampaignPage = () => {
  const [showModal, setShowModal] = useState(false)
  let location = useLocation()
  return (
    <>
      <Navbar />
      {location.pathname === '/campaign' ? (
        <PageContainer>
          <h1>Adventures Under a Dying Sun</h1>
          <AddEntryButton onClick={() => setShowModal(true)}>
            <img src={quilIcon} />
          </AddEntryButton>
          New Entry
          <StoryEntryModal
            onClose={() => setShowModal(false)}
            showModal={showModal}
          />
          <CampaignWrapper>
            <Divider src={divider} alt="divider" />
            <h4>Saturday, 02/07</h4>
            <p>
              We drove out the Orcs from the Great Gate and guardroom and took
              the First Hall. We slew many in the bright sun in the dale. Flói
              was killed by an arrow. He slew the great chieftain. We
              buried…Flói under grass near Mirrormere…came…ken we repaired…We
              have taken the Twenty-first Hall of North End to dwell in. There
              is good air…that can easily be watched…the shaft is clear…Balin
              has set up his seat in the Chamber of
              Mazarbul…gathered…gold…wonderful lay Durin’s Axe and…silver helm.
              Balin has taken them for his own. Balin is now lord of
              Moria:…today we found truesilver…well-forged helm…made all of
              purest mithril…Óin to seek for the upper armories of the Third
              Deep…go westwards to s…to Hollin Gate.
            </p>
            <EntrySignature>
              <SealImg src={sealImg} />
              <span>Idris Kushul</span>
            </EntrySignature>
            <Divider src={divider} alt="divider" />
            <h4>Monday, 04/07</h4>
            <p>
              …years since…ready sorrow…yesterday being the tenth of November
              Balin, lord of Moria, fell in Dimrill Dale. He went alone to look
              in Mirrormere. An Orc shot him from behind a stone. We slew the
              orc, but many more came…up from east up the Silverlode…we rescued
              Balin’s body..after a sharp battle…we have barred the gates but
              doubt if…we can hold them long. If there is…no escape it will be a
              horrible fate to suffer, but I shall hold.
            </p>
            <EntrySignature>
              <SealImg src={sealImg} />
              <span>Baksha Greenleaf</span>
            </EntrySignature>
            <Divider src={divider} alt="divider" />
            <h4>Friday, 08/07</h4>
            <p>
              We cannot get out. We cannot get out. They have taken the bridge
              and Second Hall. Frár and Lóni and Náli fell there bravely while
              the rest retreated to the Chamber of…Mazarbul. We are still
              holding...but hope …Óin's party went five days ago but today only
              four returned. The pool is up to the wall at West-gate. The
              Watcher in the Water took Óin--we cannot get out. The end comes
              soon. We hear drums, drums in the deep. They are coming..
            </p>
            <EntrySignature>
              <SealImg src={sealImg} />
              <span>Bromir</span>
            </EntrySignature>
            <Divider src={divider} alt="divider" />
          </CampaignWrapper>
        </PageContainer>
      ) : null}
    </>
  )
}

export default CampaignPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: 1000px;
  h1 {
    margin-top: 30px;
    margin-bottom: 0;
    text-align: center;
  }
`
const CampaignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  p {
    font-size: 20px;
    width: 80%;
  }
  h4 {
    margin: 0;
    width: 80%;
    font-size: 30px;
    font-family: 'Splash', cursive;
    font-weight: normal;
  }
`

const AddEntryButton = styled.button`
  display: flex;
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  margin-top: 30px;
  img {
    :hover {
      transform: scale(1.09);
    }
    :active {
      transform: scale(1);
    }
  }
`

const EntrySignature = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  width: 90%;
  span {
    font-family: 'Splash', cursive;
    font-size: 30px;
    line-height: 100px;
  }
`

const SealImg = styled.img`
  width: 100%;
  max-width: 100px;
`

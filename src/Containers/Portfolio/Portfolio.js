import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import * as porftolioImgs from '../../Sources/PortfolioImg/PortfolioImg'
import myClass from './Portfolio.module.css'
import cancelI from '../../Image/Icons/x.png'

function Portfolio(props) {
    
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const PHOTO_SET = [
        {
          src: porftolioImgs.PortfolioImg.img1,
          width: 4.5,
          height: 3,
          title: "Photoshoot, photo, Creative Photoshoot, Corporate, Corporate photoshoot, Photographer"
        },
        {
          src: porftolioImgs.PortfolioImg.img2,
          width: 5,
          height: 3,
          title: "Photoshoot, photo, Corporate, Corporate photoshoot, Photographer"
        },
        {
          src: porftolioImgs.PortfolioImg.img3,
          width: 1,
          height: 1,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer"
        },
        {
          src: porftolioImgs.PortfolioImg.img4,
          width: 1,
          height: 1,
          title: "3D printing, 3D print, Photoshoot, photo, Creative Photoshoot, Corporate, Corporate photoshoot, Photographer"
        },
        {
          src: porftolioImgs.PortfolioImg.img5,
          width: 4.5,
          height: 3,
          title: "web design, website design, webdesign, webdeign in Nordjylland, webdesigner Nordjyland, Webdevelopment, Worpress, Wordpress Nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img6,
          width: 4,
          height: 3,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer, photographer in Aalborg, photographer Nordjylland, fotograf, fotografer nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img7,
          width: 4.5,
          height: 3,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer, photographer in Aalborg, photographer Nordjylland, fotograf, fotografer nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img8,
          width: 1,
          height: 1,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer, photographer in Aalborg, photographer Nordjylland, fotograf, fotografer nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img9,
          width: 4.5,
          height: 3,
          title: "web design, website design, webdesign, webdeign in Nordjylland, webdesigner Nordjyland, Webdevelopment, Worpress, Wordpress Nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img10,
          width: 4.5,
          height: 3,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer, photographer in Aalborg, photographer Nordjylland, fotograf, fotografer nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img11,
          width: 1,
          height: 1,
          title: "web design, website design, webdesign, webdeign in Nordjylland, webdesigner Nordjyland, Webdevelopment, Worpress, Wordpress Nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img12,
          width: 4.5,
          height: 3,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer, photographer in Aalborg, photographer Nordjylland, fotograf, fotografer nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img13,
          width: 4.5,
          height: 3,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer, photographer in Aalborg, photographer Nordjylland, fotograf, fotografer nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img14,
          width: 1,
          height: 1,
          title: "3D printing, 3D print, Photoshoot, photo, Creative Photoshoot, Corporate, Corporate photoshoot, Photographer"
        },
        {
          src: porftolioImgs.PortfolioImg.img15,
          width: 4.5,
          height: 3,
          title: "web design, website design, webdesign, webdeign in Nordjylland, webdesigner Nordjyland, Webdevelopment, Worpress, Wordpress Nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img16,
          width: 4.5,
          height: 3,
          title: "anim, animation editing, 3d Animation, editing in Nordjylland, Video Nordjyland, Webdevelopment, Animation, Animation Nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img17,
          width: 4.5,
          height: 3,
          title: "web design, website design, webdesign, webdeign in Nordjylland, webdesigner Nordjyland, Webdevelopment, Worpress, Wordpress Nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img18,
          width: 4.5,
          height: 3,
          title: "3D printing, 3D print, Photoshoot, photo, Creative Photoshoot, Corporate, Corporate photoshoot, Photographer"
        },
        {
          src: porftolioImgs.PortfolioImg.img19,
          width: 4.5,
          height: 3,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer, photographer in Aalborg, photographer Nordjylland, fotograf, fotografer nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img20,
          width: 4.5,
          height: 3,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer, photographer in Aalborg, photographer Nordjylland, fotograf, fotografer nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img21,
          width: 1,
          height: 1,
          title: "Photoshoot, photo, Social media, Corporate, Corporate photoshoot, Photographer, photographer in Aalborg, photographer Nordjylland, fotograf, fotografer nordjylland"
        },
        {
          src: porftolioImgs.PortfolioImg.img22,
          width: 4.5,
          height: 3,
          title: "anim, animation editing, 3d Animation, editing in Nordjylland, Video Nordjyland, Webdevelopment, Animation, Animation Nordjylland"
        }
      ];
  
      const openLightbox = useCallback((event, { PHOTO_SET, index }) => {
          console.log(index)
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };

      function columns(containerWidth) {
        let columns = 1;
        if (containerWidth >= 500) columns = 1;
        if (containerWidth >= 900) columns = 2;
        if (containerWidth >= 1500) columns = 3;
        if (containerWidth >= 2400) columns = 4;
        return columns;
      }
      let gohome = () => {
        props.history.push('/')
      }

    return (
        <div className={myClass.portfolioGalWrapper}>
        <img onClick={() => gohome()} src={cancelI} alt="Blank"/>
        <Gallery direction="column" columns={columns} photos={PHOTO_SET} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={PHOTO_SET.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    )
}

export default Portfolio

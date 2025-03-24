import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import ScrollFadeIn from "@/components/ScrollAnimated";
import BlurText from "@/app/TextAnimations/BlurText/BlurText";
import Stack from "@/app/Components/Stack/Stack";

const TentangKami = () => {
  const image = [
    {
      id: 1,
      img: "/logo.jpg",
    },
    {
      id: 2,
      img: "/LOGO-SMP.ico",
    },
    {
      id: 3,
      img: "/LOGO-SMA.jpg",
    },
    {
      id: 4,
      img: "/tqp.jpg",
    },
    {
      id: 5,
      img: "/pondok.jpg",
    },
    {
      id: 6,
      img: "/paud.jpg",
    },
    {
      id: 7,
      img: "/mdt.jpg",
    },
  ];
  return (
    <Container>
      <div className="py-16 bg-white">
        <ScrollFadeIn direction="left" amount={0.3}>
          <div className="container justify-center mx-auto flex flex-col md:flex-row items-center gap-10 px-4 pb-24">
            <div className="md:w-1/2 lg:w-1/3 ">
              {/* <Image
                src="/logo.jpg"
                width={600}
                height={400}
                alt="Tentang Kami"
                className="rounded-lg shadow-lg"
              /> */}
              <div className="lg:hidden hidden md:block">
                <Stack
                  randomRotation={true}
                  cardDimensions={{ width: 300, height: 300 }}
                  cardsData={image}
                  sensitivity={180}
                  sendToBackOnClick={false}
                />
              </div>
              <div className="md:hidden lg:hidden 2xl:hidden">
                <Stack
                  randomRotation={true}
                  cardDimensions={{ width: 300, height: 300 }}
                  cardsData={image}
                  sensitivity={180}
                  sendToBackOnClick={false}
                />
              </div>

              <div className="md:hidden hidden lg:hidden 2xl:block">
                <Stack
                  randomRotation={true}
                  cardDimensions={{ width: 400, height: 400 }}
                  cardsData={image}
                  sensitivity={180}
                  sendToBackOnClick={false}
                />
              </div>
              <div className="md:hidden hidden lg:block 2xl:hidden">
                <Stack
                  randomRotation={true}
                  cardDimensions={{ width: 350, height: 350 }}
                  cardsData={image}
                  sensitivity={180}
                  sendToBackOnClick={false}
                />
              </div>
            </div>
            <div className="md:w-1/2 ">
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong className="md:text-xl text-base text-green-800 font-extrabold">
                  <BlurText text="Yayasan Islamiyyah Al Jihad Ketapang" delay={0} />
                </strong>
                <BlurText
                  delay={40}
                  text="adalah lembaga pendidikan yang berkomitmen membentuk generasi
                unggul, berprestasi, dan berakhlak mulia. Dengan fasilitas
                lengkap dan pengajar profesional, kami siap mengantarkan siswa
                menuju masa depan cerah berlandaskan nilai-nilai Islami.
                Bergabunglah bersama kami, dan jadilah bagian dari perubahan
                menuju generasi emas!"
                
                />
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                <BlurText text="" delay={40}  />
             
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </Container>
  );
};

export default TentangKami;

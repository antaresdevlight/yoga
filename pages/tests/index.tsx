import Footer from "@/src/components/Footer";
import UserCard from "@/src/components/UserCard";
import Logo from "@/src/components/Logo";
import HeadingText from "@/src/components/HeadingText";
import CardOne from "@/src/components/CardOne";
import SubText from "@/src/components/SubText";
import MainButton from "@/src/components/MainButton";
import HorizontalImage from "@/src/components/HorizontalImage";
import CircleImage from "@/src/components/CircleImage";
import CourseCard from "@/src/components/CourseCard";
import VerticalImage from "@/src/components/VerticalImage";
import SummaryCard from "@/src/components/SummaryCard";
import FormInput from "@/src/components/FormInput";
import Header from "@/src/components/Header";
import Location from "@/src/components/Location";
import Me from "@/src/components/Me";
import About from "@/src/components/About";
import MyWork from "@/src/components/MyWork";
import MyProjects from "@/src/components/MyProjects";
import ClassesGroup from "@/src/components/ClassesGroup";

function Tests() {
  return (
    <div>
      <MainButton text1={"Ver cursos"} color={"blue"} />
      <Footer />
      <UserCard />
      <Logo />
      <HeadingText text1={"buenos dias"} />
      <CardOne
        titulo={"Energia Creadora"}
        titulo2={
          "Recibo con amor tantas bendiciones y sabiduria que este retiro nos ayudo a descubrir"
        }
      />
      <SubText text1={"Transforma tu perspectiva"} />
      <HorizontalImage />
      <CircleImage />
      <CourseCard name={"Clases grupales"} precio={"Costo $120"} color={"purple"}/>
      <VerticalImage />
      <SummaryCard
        text1={"RE COR DARTE"}
        text2={"Retiro"}
        text3={"22-24 Noviembre"}
        text4={"Bosques del Zembo Huasca"}
      />
      <FormInput />
      <Header />
      <Location />
      <Me />
      <About />
      <MyWork />
      <MyProjects />
      <ClassesGroup/>
    </div>
  );
}

export default Tests;

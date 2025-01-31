import Image from "next/image";
import Cat from "../assets/cat.png";

const Message = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Image src={Cat} alt="cat" className="h-[50rem] w-full" />
      </div>
      <div>
        Xin chào tình yêu của tôi, đây là bất ngờ lập trình đầu tiên của tôi<br></br>
        dành cho bạn! Every day that passes I’m more and more sure that I want    <br></br>
        to spend my life with you, I remember in the beginning when I told you<br></br>
        that I didn’t want a relationship but I was the first to fall for you,<br></br>
        and now sometime later, YEARS LATER mind you, you fell the hardest for<br></br>
        me. You changed your opinions on dating, marriage and all that it<br></br>
        brings! I know I’m not the easiest person to try to understand or unveil<br></br>
        the feeling of but I truly care about you and more so I love you<br></br>
        immensely, you’re an incredible, unique girl and I couldn’t be luckier<br></br>
        to have you by my side. You’re gorgeous, funny, sweet, and you make me<br></br>
        feel taken care of even though I try to be the one taking care of you<br></br>
        constantly you always find a way to one up me! ♥ I love the way you<br></br>
        smile, the way you laugh, the way your eyes shine when locked onto me,<br></br>
        the way you walk and run late to the bus or school, the way you plan a<br></br>
        life with me… Everything is turning out to be great with us even with<br></br>
        your parents, I don’t know I never expected them to actually like me,<br></br>
        specially your mom but it turns out she did somehow like me, we’ve slept<br></br>
        together, even with them in the house! How crazy is that we even have a<br></br>
        house together as well! Never got this far to feeling fulfilled in life<br></br>
        but I feel like with you everything is possible, I’ll try to do my best<br></br>
        so I can provide you with the best life possible I’m building up my<br></br>
        knowledge and curriculum just for you, just for the possibility of a<br></br>
        happy life with you my love… All that said I love you very much so and I<br></br>
        can’t wait for more and more lovely moments by your side… I hope what<br></br>
        you say of me being stuck with you is true ♥ Forever yours, Fábio Amaral<br></br>
      </div>
    </div>
  );
};

export default Message;

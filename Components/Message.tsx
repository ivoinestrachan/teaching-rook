import Image from "next/image";
import Cat from "../assets/cat.png";

const Message = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Image src={Cat} alt="cat" className="h-[50rem] w-full" />
      </div>
      <div className="w-[25%]">
        Xin chào tình yêu của tôi, đây là bất ngờ lập trình đầu tiên của tôi
        dành cho bạn! Every day that passes I’m more and more sure that I want
        to spend my life with you, I remember in the beginning when I told you
        that I didn’t want a relationship but I was the first to fall for you,
        and now sometime later, YEARS LATER mind you, you fell the hardest for
        me. You changed your opinions on dating, marriage and all that it
        brings! I know I’m not the easiest person to try to understand or unveil
        the feeling of but I truly care about you and more so I love you
        immensely, you’re an incredible, unique girl and I couldn’t be luckier
        to have you by my side. You’re gorgeous, funny, sweet, and you make me
        feel taken care of even though I try to be the one taking care of you
        constantly you always find a way to one up me! ♥ I love the way you
        smile, the way you laugh, the way your eyes shine when locked onto me,
        the way you walk and run late to the bus or school, the way you plan a
        life with me… Everything is turning out to be great with us even with
        your parents, I don’t know I never expected them to actually like me,
        specially your mom but it turns out she did somehow like me, we’ve slept
        together, even with them in the house! How crazy is that we even have a
        house together as well! Never got this far to feeling fulfilled in life
        but I feel like with you everything is possible, I’ll try to do my best
        so I can provide you with the best life possible I’m building up my
        knowledge and curriculum just for you, just for the possibility of a
        happy life with you my love… All that said I love you very much so and I
        can’t wait for more and more lovely moments by your side… I hope what
        you say of me being stuck with you is true ♥ Forever yours, Fábio Amaral
      </div>
    </div>
  );
};

export default Message;

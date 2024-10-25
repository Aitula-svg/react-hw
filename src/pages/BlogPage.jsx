import styled from "styled-components";

export const BlogPage = () => {
  return (
    <StyleDiv>
      <StyleH3>Product Description</StyleH3>
      <StyleButtom></StyleButtom>
      <p>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
        lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
        cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet
        ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget
        velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam,
        purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo
        augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl,
        in accumsan elit odio quis mi. Cras neque metus, consequat et blandit
        et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula
        euismod eget. The ceramic cylinder planters come with a wooden stand to
        help elevate your plants off the ground.{" "}
      </p>
      <h3>Living Room:</h3>
      <p>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
      <h3>Dining Room:</h3>
      <p>
        The benefits of houseplants are endless. In addition to cleaning the air
        of harmful toxins, they can help to improve your mood, reduce stress and
        provide you with better sleep. Fill every room of your home with
        houseplants and their restorative qualities will improve your life.
      </p>
      <h3>Office:</h3>
      <p>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
    </StyleDiv>
  );
};

const StyleH3 = styled.h3`
  font-size: 32px;
  color: #46a358;
`;

const StyleDiv = styled.div`
  padding: 70px 120px 0px 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyleButtom = styled.div`
border-bottom: 0.3px solid #46A35880;
  
`

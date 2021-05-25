import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: 'SectionContainer',
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ea sed repudiandae? Impedit
          aliquam, est iure temporibus totam illum voluptas fugit consequuntur, saepe aliquid
          accusantium? Possimus modi unde velit libero!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};

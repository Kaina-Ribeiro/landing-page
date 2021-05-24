import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: 'TextComponent',
  args: {
    children: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo earum rerum, animi
      excepturi, ut amet esse minus sint quae doloremque accusamus voluptatibus nobis ipsum
      molestias? Omnis dolorem ex itaque pariatur!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};

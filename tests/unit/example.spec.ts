import { mount } from '@vue/test-utils';
import Home from '../../src/views/HomePage.vue';

describe('HomePage', () => {
  it('should display proper title', () => {
    const title = 'V2P2 Starter';
    const wrapper = mount(Home);

    expect(wrapper.find('#title').text()).toEqual(title);
  });
});

/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Calender from '../Calender.vue';

describe('Calender', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Calender);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

test('renders to match snapshot', () => {
  const wrapper = shallowMount(Calender);
  expect(wrapper.element).toMatchSnapshot();
});

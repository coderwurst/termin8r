/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Calendar from '@/components/Calendar.vue';

describe('Calendar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Calendar);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

test('renders to match snapshot', () => {
  const wrapper = shallowMount(Calendar);
  expect(wrapper.element).toMatchSnapshot();
});

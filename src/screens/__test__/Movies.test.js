import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'
import Movies from '../Movies'
import { act } from 'react-dom/test-utils'
import { moviesListMock } from '../../mockData/moviesList'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../theme/theme'
import { Typography } from '@material-ui/core'

configure({ adapter: new Adapter() })

describe('movies', () => {
  it('fetch movies and select to view details', async () => {
    const mockJsonPromise = Promise.resolve(moviesListMock)
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      status: 200
    })
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)

    let wrapper

    await act(async () => {
      wrapper = await mount(
        <ThemeProvider theme={theme}>
          <Movies />
        </ThemeProvider>
      )
    })
    expect(global.fetch).toHaveBeenCalledTimes(1)

    wrapper.update()

    expect(wrapper.find('Slider').length).toEqual(1)
    expect(wrapper.find('img').length).toEqual(21)

    act(() => {
      wrapper.find('img').at(1).simulate('click')
    })

    wrapper.update()

    expect(wrapper.find('#title').length).toEqual(1)
    expect(wrapper.find('#title').text()).toEqual('The Jungle Book')

    act(() => {
      wrapper.find('img').at(2).simulate('click')
    })

    wrapper.update()

    expect(wrapper.find('#title').length).toEqual(1)
    expect(wrapper.find('#title').text()).toEqual('Unforgettable')
    // await act(async () => {
    //   await wrapper
    //     .find('input')
    //     .simulate('change', { target: { value: 'melbourne' } })
    //   await wrapper.find('#SearchIconButton').at(0).simulate('click')
    // })

    // expect(global.fetch).toHaveBeenCalledTimes(1)
    // wrapper.update()
  })
})

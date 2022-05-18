import { mount } from "enzyme";
import Alert from "@common/Alert";
import { render } from "@testing-library/react";
jest.useFakeTimers();

describe('<Alert />', () => {
    const alert = {
        message: 'Product deleted',
        type: 'success',
    }  
    const alertwithAutoClose = {
        message: 'Product deleted',
        type: 'success',
        autoClose: true
    }
    
    test('it render Alert', () => {
        const wrapper = mount(<Alert alert={alert} />);
        expect(wrapper.length).toEqual(1);
    })
    test('should dispatch handleClose after 9 seconds', () => {
        const handleClose = jest.fn();
        render(<Alert alert={alertwithAutoClose} handleClose={handleClose} />);
        expect(handleClose).not.toBeCalled();
        jest.advanceTimersByTime(9000);
        expect(handleClose).toHaveBeenCalledTimes(1);
    })
})
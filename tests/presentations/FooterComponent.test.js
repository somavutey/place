import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FooterComponent from "./../../components/presentations/FooterComponent";

it("FooterComponent", () => {
  const wrapper = shallow(<FooterComponent />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

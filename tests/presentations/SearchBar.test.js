import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MultipleSelect from "../../components/presentations/SearchBar";

it("SearchBar", () => {
  const wrapper = shallow(<MultipleSelect />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
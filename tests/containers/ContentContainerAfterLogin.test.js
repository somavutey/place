import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardInHomepage from "./../../components/containers/ContentContainerAfterLogin";

it("CardInHomepage", () => {
  const wrapper = shallow(<CardInHomepage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

////error because of CSS module
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import useFirebaseAuth from "./../../components/presentations/firebase";

it("firebase", () => {
  const wrapper = shallow(<useFirebaseAuth />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

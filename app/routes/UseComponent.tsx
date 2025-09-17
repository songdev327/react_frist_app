import { Button } from "~/components/Button";

export default function UseComponent() {
  return (
    <div>
      <div><Button label="Button 1" /></div>
      <div style={{ margin: '10px 0'}}><Button label="Button 2" backgroundColor="red" /></div>
      <div style={{ margin: '10px 0'}}><Button label="Button 3" backgroundColor="orange">
        <i className="fa fa-plus"></i>
        <span style={{marginLeft: '5px'}}>Save Now</span>
      </Button>
      </div>
    </div>
  );
}

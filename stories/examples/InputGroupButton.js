import React, { useState } from 'react';
import {
  InputGroup,
  Input,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <div>
      <InputGroup>
        <Button>I'm a button</Button>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>
            Button Dropdown 1
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </InputGroup>
      <br />
      <InputGroup>
        <ButtonDropdown isOpen={splitButtonOpen} toggle={toggleSplit}>
          <Button outline>Split Button</Button>
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <Input placeholder="and..." />
        <Button color="secondary">I'm a button</Button>
      </InputGroup>
    </div>
  );
}


export default Example;

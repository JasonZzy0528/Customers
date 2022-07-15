import styled from "styled-components";

export const Avatar = styled.div`
  background-color: rgb(234, 242, 250);
  color: rgb(48, 111, 199);
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
`;

export const Name = styled.div`
  text-align: left;
`;

export const Role = styled.div`
  font-size: 0.8rem;
  color: rgb(155, 153, 152);
  text-align: left;
`;

export const CustomerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const NameRoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

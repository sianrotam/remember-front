import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import React, { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { usePasswordsQuery } from '../hooks/usePassword';

const Password = () => {
  const queryClient = useQueryClient();
  const { status, data, error } = usePasswordsQuery();

  const renderPasswordTableByStatus = useCallback(() => {
    switch(status){
      case 'loading':
        return <div>Loading...</div>;
      case 'error':
        if (error instanceof Error) {
          return <span>Error: {error.message}</span>;
        }
        break;
      default:
        return (
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">사이트명</th>
                <th scope="col">주소</th>
                <th scope="col">아이디</th>
                <th scope="col">비밀번호</th>
                <th scope="col">기타사항</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {data?.map((password) => (
                <tr key={password.seq}>
                  <th scope="row">
                    <span className="mb-0 text-sm">
                      {password.siteKrName}
                    </span>
                  </th>
                  <td>
                    {password.siteEnName}
                  </td>
                  <td>
                    {password.id}
                  </td>
                  <td>
                    {password.password}
                  </td>
                  <td>
                    {password.remark}
                  </td>
                  <td className="text-right">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-ellipsis-v" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        );
    }
  }, [status, data, error]);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Password List</h3>
              </CardHeader>
              
                {renderPasswordTableByStatus()}
              
              <CardFooter className="py-4">
                <nav aria-label="...">                 
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Password;

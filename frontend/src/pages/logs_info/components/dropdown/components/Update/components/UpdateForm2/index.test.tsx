import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "@/setup/context-manager/authContext";
import LogsInfoContextProvider from "@/setup/context-manager/logsInfoContext";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import DropDown from "@/pages/logs_info/components/dropdown/";
import { ReportType } from '@/generated/graphql';
import userEvent from '@testing-library/user-event';



const queryClient = new QueryClient();

const test_data = {
  "report": {
    "report_id": "cldq7c382000q8nvlxb1x5u53",
    "report_type": ReportType.CityProject,
    "location": {
      "addresses": {
        "general_address": "Ayala Malls Cloverleaf, Cloverleaf Mall Drop-Off, A. Bonifacio, Quezon City, Metro Manila, Philippines",
        "from": "1114 A. Bonifacio Ave, A. Bonifacio, Quezon City, Metro Manila, Philippines",
        "to": "1114 A. Bonifacio Ave, A. Bonifacio, Quezon City, Metro Manila, Philippines"
      },
      "origin": {
        "lat": 14.65521130872526,
        "lng": 120.99997729876719
      },
      "destination": {
        "lat": 14.655164942178708,
        "lng": 121.000002133025
      }
    },
    "description": "gasgagasgasggasgasgasg",
    "incident": null,
    "city_project": {
      "project_name": "asgagga",
      "contractor_name": "gasdga",
      "date_started": "2023-01-28T00:00:00.000Z",
      "date_ended": "2023-01-29T00:00:00.000Z",
      "source_fund": "gasgsa",
      "project_ammount": 2,
      "contract_ammount": 2
    }
  }
}


describe('render the component', () => {
  let container: HTMLElement;
  beforeEach(() => {
    const popOut = jest.fn();
    const results = render(
      <AuthContextProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <LogsInfoContextProvider>
              <DropDown report={test_data} setMenuTrig={popOut} />
            </LogsInfoContextProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </AuthContextProvider>
    );
    container = results.container;
  })

  afterEach(cleanup);


  test('if component rendered', () => {
    const updateForm = screen.getByTestId("infoDrop");

    expect(updateForm).toBeInTheDocument();

  })


  describe('City Project update option', () => {
    test('check if update form rendered on update option clicked', () => {
      const updateBtn = screen.getByTestId('updateBtn');
      fireEvent.click(updateBtn);

      const updateForm = screen.getByTestId('updateForm');

      expect(updateForm).toBeInTheDocument();
    })
  })

  describe('CityProject update form', () => {
    beforeEach(() => {
      const delBtn = screen.getByTestId('updateBtn');
      fireEvent.click(delBtn);
    })

    test('if components inside form rendered', () => {

      const title = screen.getAllByRole("heading");
      const formBtn = screen.getAllByRole("button");
      const formInput = screen.getAllByRole("textbox");
      const stepbar = screen.getByTestId("stepbar");

      expect(title.length).toBe(1);
      expect(stepbar).toBeInTheDocument();
      expect(formInput.length).toBe(3);
      expect(formBtn.length).toBe(1);
    })

    describe('calendar should show on ', () => {
      test('startDate field click', () => {
        const startDate = screen.getByTestId("start-date");

        userEvent.click(startDate);
        const startCal = container.getElementsByClassName("calendarUpdate");
        expect(startCal[0]).toBeInTheDocument();

      })

      test('endDate field click', () => {
        const endDate = screen.getByTestId("end-date");

        userEvent.click(endDate);
        const startCal = container.getElementsByClassName("calendarUpdate");
        expect(startCal[0]).toBeInTheDocument();
      })
    })
    describe('should able to select date on calendar', () => {
      test('startDate', () => {
        const startDate = screen.getByTestId("start-date");

        userEvent.click(startDate);
        const dayNum = container.getElementsByClassName("rdrDayNumber");
        expect(dayNum[0]).toBeInTheDocument(); // calendar should be on the DOM
        userEvent.click(dayNum[0]);
        expect(dayNum[0]).toBeUndefined(); // calendar should not be in the DOM after render
        expect(startDate).toHaveValue("2023-01-29");
      })
      test('endDate', () => {
        const endDate = screen.getByTestId("end-date");

        userEvent.click(endDate);
        const dayNum = container.getElementsByClassName("rdrDayNumber");
        expect(dayNum[1]).toBeInTheDocument(); // calendar should be on the DOM
        userEvent.click(dayNum[1]);
        expect(dayNum[1]).toBeUndefined(); // calendar should not be in the DOM after render
        expect(endDate).toHaveValue("2023-01-30");
      })
    })

    describe('should not be able to set endDate that past the startdate', () => {
      test('endDate', () => {
        const startDate = screen.getByTestId("start-date");

        userEvent.click(startDate); //trigger the calendar

        const startDayNum = container.getElementsByClassName("rdrDayNumber");
        userEvent.click(startDayNum[1]);
        expect(startDate).toHaveValue("2023-01-30");

        const endDate = screen.getByTestId("end-date");

        userEvent.click(endDate);
        const endDayNum = container.getElementsByClassName("rdrDayNumber");
        //expect(endDayNum[0]).toBeInTheDocument(); // calendar should be on the DOM
        userEvent.click(endDayNum[0]);
        expect(endDate).toHaveValue("2023-01-29");

      })
    })

    describe('should go to next page when next button is cliked', () => {
      test('second page rendered?', () => {

        const nextBtn = screen.getByRole('button');
        fireEvent.click(nextBtn);

        const formInput = screen.getAllByRole("textbox");
        const formInputNumber = screen.getAllByRole("spinbutton");
        expect(formInputNumber).toHaveLength(2);
        expect(formInput.length).toBe(3);
      })
    })

    describe('City project form second page', () => {
      beforeEach(() => {
        const nextBtn = screen.getByRole('button');
        fireEvent.click(nextBtn);
      })
      describe('should be able to type in', () => {

        test("Project Name input", () => {
          const emailInputElement = screen.getByLabelText("Project Name");
          fireEvent.change(emailInputElement, { target: { value: "" } });

          const afterEmailInputElement = screen.getByLabelText("Project Name");
          userEvent.type(afterEmailInputElement, "hello");

          expect(emailInputElement).toHaveValue("hello");
        })

        test("Contractor", () => {
          const emailInputElement = screen.getByLabelText("Contractor");
          fireEvent.change(emailInputElement, { target: { value: "" } });

          const afterEmailInputElement = screen.getByLabelText("Contractor");
          userEvent.type(afterEmailInputElement, "hello");

          expect(emailInputElement).toHaveValue("hello");
        })

        test("Finance", () => {
          const emailInputElement = screen.getByLabelText("Finance");
          fireEvent.change(emailInputElement, { target: { value: "" } });

          const afterEmailInputElement = screen.getByLabelText("Finance");
          userEvent.type(afterEmailInputElement, "hello");

          expect(emailInputElement).toHaveValue("hello");
        })

        test("Program ammount", () => {
          const emailInputElement = screen.getByTestId("pg-ammount");
          fireEvent.change(emailInputElement, { target: { value: "" } });

          const afterEmailInputElement = screen.getByTestId("pg-ammount");
          userEvent.type(afterEmailInputElement, "3");

          expect(emailInputElement).toHaveValue(3);
        })

        test("Contract", () => {
          const emailInputElement = screen.getByTestId("contract");
          fireEvent.change(emailInputElement, { target: { value: "" } });

          const afterEmailInputElement = screen.getByTestId("contract");
          userEvent.type(afterEmailInputElement, "3");

          expect(emailInputElement).toHaveValue(3);
        })

      })
    })


    describe('areatext', () => {
      test('able to type in textarea', () => {

        const textArea = screen.getByTestId("areatext-desc");

        userEvent.type(textArea, "test hello");
        expect(textArea).toHaveValue("gasgagasgasggasgasgasgtest hello");
      })
    });

    describe('button', () => {
      test('button should not be disabled when input exists', () => {
        const btnElement = screen.getByRole('button');
        expect(btnElement).not.toBeDisabled();
      });
      test('button should be disabled when description is empty', () => {
        const textArea = screen.getByTestId("areatext-desc");
        fireEvent.change(textArea, { target: { value: "" } });

        const nextBtn = screen.getByRole('button');
        fireEvent.click(nextBtn);

        const projectnameInput = screen.getByLabelText("Project Name");
        fireEvent.change(projectnameInput, { target: { value: "" } });

        const contractorInput = screen.getByLabelText("Contractor");
        fireEvent.change(contractorInput, { target: { value: "" } });

        const financeInput = screen.getByLabelText("Finance");
        fireEvent.change(financeInput, { target: { value: "" } });

        const programAmmountInput = screen.getByTestId("pg-ammount");
        fireEvent.change(programAmmountInput, { target: { value: "" } });

        const contractInput = screen.getByTestId("contract");
        fireEvent.change(contractInput, { target: { value: "" } });

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      });

      test('CityProject update form should be gone on update', async () => {
        const btnElement = screen.getByRole('button');
        const updateForm = screen.getByTestId("updateForm");

        fireEvent.click(btnElement);

        const nextBtn = screen.getByRole('button');
        fireEvent.click(nextBtn);

        await waitFor(() => {
          expect(updateForm).not.toBeInTheDocument();
        })

      })

    });
  })
})

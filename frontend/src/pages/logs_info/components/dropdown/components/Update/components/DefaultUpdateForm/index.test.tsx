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
    "report_id": "cldfoluk8000u8n50g12gjvjg",
    "report_type": ReportType.RoadClosure,
    "location": {
      "addresses": {
        "general_address": "Muñoz, Quezon City, Metro Manila, Philippines",
        "from": "85 San Antonio, Quezon City, 1105 Metro Manila, Philippines",
        "to": "189 San Antonio, Quezon City, Metro Manila, Philippines"
      },
      "origin": {
        "lat": 14.656515072116497,
        "lng": 121.01852405486727
      },
      "destination": {
        "lat": 14.65657308857938,
        "lng": 121.01812364194504
      }
    },
    "description": "gsadgasg",
    "incident": {
      "date_started": "2023-01-28T00:00:00.000Z",
      "date_ended": "2023-01-29T00:00:00.000Z"
    },
    "city_project": null
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


  describe('Incident update option', () => {
    test('check if update form rendered on update option clicked', () => {
      const updateBtn = screen.getByTestId('updateBtn');
      fireEvent.click(updateBtn);

      const updateForm = screen.getByTestId('updateForm');

      expect(updateForm).toBeInTheDocument();
    })
  })

  describe('Incident update form', () => {
    beforeEach(() => {
      const delBtn = screen.getByTestId('updateBtn');
      fireEvent.click(delBtn);
    })

    test('if components inside form rendered', () => {

      const title = screen.getAllByRole("heading");
      const formBtn = screen.getAllByRole("button");
      const formInput = screen.getAllByRole("textbox");


      expect(title.length).toBe(1);
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


    describe('areatext', () => {
      test('able to type in textarea', () => {

        const textArea = screen.getByTestId("areatext-desc");

        userEvent.type(textArea, "test hello");
        expect(textArea).toHaveValue("gsadgasgtest hello");
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
        expect(textArea).toHaveValue("");

        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeDisabled();
      });
      test('delete form and dropdown should be gone on delete', async () => {
        const btnElement = screen.getByRole('button');
        const updateForm = screen.getByTestId("updateForm");

        fireEvent.click(btnElement);

        await waitFor(() => {
          expect(updateForm).not.toBeInTheDocument();
        })

      })

    });
  })
})

import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "@/setup/context-manager/authContext";
import LogsInfoContextProvider from "@/setup/context-manager/logsInfoContext";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import DropDown from "@/pages/logs_info/components/dropdown/";
import { ReportType } from '@/generated/graphql';



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

  beforeEach(() => {
    const popOut = jest.fn();
    render(
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
  })

  afterEach(cleanup);


  test('if component rendered', () => {
    const delForm = screen.getByTestId("infoDrop");

    expect(delForm).toBeInTheDocument();

  })


  describe('delete option', () => {
    test('check if delete form rendered on delete option clicked', () => {
      const delBtn = screen.getByTestId('deleteBtn');
      fireEvent.click(delBtn);

      const delForm = screen.getByTestId('deleteForm');

      expect(delForm).toBeInTheDocument();
    })
  })

  describe('delete form', () => {
    beforeEach(() => {
      const delBtn = screen.getByTestId('deleteBtn');
      fireEvent.click(delBtn);
    })

    test('if form buttons rendered', () => {

      const formBtn = screen.getAllByRole("button");

      expect(formBtn.length).toBe(2);
    })

    test('delete form should close on cancel button click', () => {
      const cancelBtn = screen.getByTestId("cancel");
      const delForm = screen.getByTestId("deleteForm");

      fireEvent.click(cancelBtn);

      expect(delForm).not.toBeInTheDocument();
    })

    test('delete form and dropdown should be gone on delete', async () => {
      const delBtn = screen.getByTestId("delete");
      const delForm = screen.getByTestId("deleteForm");

      fireEvent.click(delBtn);

      await waitFor(() => {
        expect(delForm).not.toBeInTheDocument();
      })

    })
  })
})

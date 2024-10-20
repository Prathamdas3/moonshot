'use server'
import { read, utils } from 'xlsx';
import path from 'path';
import fs from 'fs';

export type DataType = {
  Day: string;
  Age: string;
  Gender: string;
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
  F: number;
}

export type ColumnDataType = {
  data: { date: string, value: number }[];
  total: number;
}

export type ReturnType = {
  total: {
    A: ColumnDataType,
    B: ColumnDataType,
    C: ColumnDataType,
    D: ColumnDataType,
    E: ColumnDataType,
    F: ColumnDataType
  };
  summary: { X: string, Y: number }[];
}

export type totalType= {
  A: ColumnDataType,
  B: ColumnDataType,
  C: ColumnDataType,
  D: ColumnDataType,
  E: ColumnDataType,
  F: ColumnDataType
}


export default async function handler(): Promise<ReturnType> {
  const totals = {
    A: { data: [] as { date: string, value: number }[], total: 0 },
    B: { data: [] as { date: string, value: number }[], total: 0 },
    C: { data: [] as { date: string, value: number }[], total: 0 },
    D: { data: [] as { date: string, value: number }[], total: 0 },
    E: { data: [] as { date: string, value: number }[], total: 0 },
    F: { data: [] as { date: string, value: number }[], total: 0 }
  };

  try {
    const filePath = path.resolve(`${process.cwd()}/src/server/`, 'data.xlsx');
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = read(fileBuffer, { type: 'buffer' });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data: DataType[] = utils.sheet_to_json(worksheet);


    data.forEach((row: DataType) => {
      const date = row.Day || 'Unknown';
     

      if (row.A) {
        totals.A.data.push({ date, value: row.A });
        totals.A.total += row.A;
      }
      if (row.B) {
        totals.B.data.push({ date, value: row.B });
        totals.B.total += row.B;
      }
      if (row.C) {
        totals.C.data.push({ date, value: row.C });
        totals.C.total += row.C;
      }
      if (row.D) {
        totals.D.data.push({ date, value: row.D });
        totals.D.total += row.D;
      }
      if (row.E) {
        totals.E.data.push({ date, value: row.E });
        totals.E.total += row.E;
      }
      if (row.F) {
        totals.F.data.push({ date, value: row.F });
        totals.F.total += row.F;
      }
    });

    // Create the summary array
    const summary = [
      { X: 'A', Y: totals.A.total },
      { X: 'B', Y: totals.B.total },
      { X: 'C', Y: totals.C.total },
      { X: 'D', Y: totals.D.total },
      { X: 'E', Y: totals.E.total },
      { X: 'F', Y: totals.F.total }
    ];

    return {
      total: totals,
      summary
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Error occurred during data fetching: ${error}`);
  }
}

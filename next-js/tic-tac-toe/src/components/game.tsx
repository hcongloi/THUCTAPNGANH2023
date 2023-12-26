"use client";

import React, { useState } from "react";
import BanCo from "./board";

type TBoard = Array<string | null>;

export default function TroChoi() {
  const [kichThuocBanCo, setKichThuocBanCo] = useState(3);
  const [kichThuocMoi, setKichThuocMoi] = useState(3);

  const [lichSu, setLichSu] = useState<TBoard[]>([
    Array(kichThuocBanCo * kichThuocBanCo).fill(null),
  ]);
  const [buocDiHienTai, setBuocDiHienTai] = useState<number>(0);
  const xChoi = buocDiHienTai % 2 === 0;
  const oChoiHienTai = lichSu[buocDiHienTai];

  const xuLyChoi = (oChoiMoi: TBoard) => {
    const lichSuMoi = [...lichSu.slice(0, buocDiHienTai + 1), oChoiMoi];
    setLichSu(lichSuMoi);
    setBuocDiHienTai(lichSuMoi.length - 1);
  };

  const nhayDen = (buocDiMoi: number) => setBuocDiHienTai(buocDiMoi);

  const taoMoiBanCo = () => {
    const newArray = Array(kichThuocMoi * kichThuocMoi).fill(null);
    setLichSu([newArray]);
    setBuocDiHienTai(0);
    setKichThuocBanCo(kichThuocMoi);
  };

  const cacBuoc = lichSu.map((oChoi, buocDi) => (
    <li key={buocDi}>
      <button
        className="text-blue-500 hover:underline"
        onClick={() => nhayDen(buocDi)}
      >
        {buocDi > 0 ? `Đi đến bước #${buocDi}` : "Quay lại đầu trò chơi"}
      </button>
    </li>
  ));

  return (
    <div className="tro-choi flex justify-center items-center h-screen">
      <div className="ban-co">
        <label>
          Kích thước bàn cờ:
          <input
            type="number"
            value={kichThuocMoi}
            onChange={(e) => setKichThuocMoi(parseInt(e.target.value))}
          />
        </label>
        <button onClick={taoMoiBanCo} className="border border-blue-600 p-2 rounded hover:bg-blue-600 hover:text-white">
          Tạo mới
        </button>
        <BanCo
          xChoi={xChoi}
          oChoi={oChoiHienTai}
          onChoi={xuLyChoi}
          size={kichThuocBanCo}
        />
      </div>
      <div className="thong-tin-choi ml-8 border border-blue-600 p-2 rounded">
        <ol>{cacBuoc}</ol>
      </div>
    </div>
  );
}

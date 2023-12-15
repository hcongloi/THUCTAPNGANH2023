'use client'

import { useState } from 'react';

interface OXProps {
  giaTri: string | null;
  onClick: () => void;
}

function OX({ giaTri, onClick }: OXProps) {
  return (
    <button className="border border-gray-400 p-4" onClick={onClick}>
      {giaTri}
    </button>
  );
}

interface BanCoProps {
  xChoi: boolean;
  oChoi: Array<string | null>;
  onChoi: (oChoiMoi: Array<string | null>) => void;
}

function BanCo({ xChoi, oChoi, onChoi }: BanCoProps) {
  function xuLyClick(i: number) {
    if (oChoi[i] || kiemTraNguoiChienThang(oChoi)) return;
    const oChoiMoi = oChoi.slice();
    oChoiMoi[i] = xChoi ? 'X' : 'O';
    onChoi(oChoiMoi);
  }

  const nguoiChienThang = kiemTraNguoiChienThang(oChoi);
  const isFull = oChoi.every((giaTri) => giaTri !== null);
  let tinhTrang;

  if (nguoiChienThang) {
    tinhTrang = 'Người chiến thắng: ' + nguoiChienThang;
  } else if (isFull) {
    tinhTrang = 'Hòa! Chơi lại từ đầu.';
  } else {
    tinhTrang = 'Lượt kế tiếp: ' + (xChoi ? 'X' : 'O');
  }

  return (
    <div className="ban-co">
      <div className="tinh-trang mb-4">{tinhTrang}</div>
      <div className="grid grid-cols-5 gap-4">
        {oChoi.map((giaTri, index) => (
          <OX key={index} giaTri={giaTri} onClick={() => xuLyClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default function TroChoi() {
  const [lichSu, setLichSu] = useState<Array<Array<string | null>>>([Array(25).fill(null)]);
  const [buocDiHienTai, setBuocDiHienTai] = useState<number>(0);
  const xChoi = buocDiHienTai % 2 === 0;
  const oChoiHienTai = lichSu[buocDiHienTai];

  const xuLyChoi = (oChoiMoi: Array<string | null>) => {
    const lichSuMoi = [...lichSu.slice(0, buocDiHienTai + 1), oChoiMoi];
    setLichSu(lichSuMoi);
    setBuocDiHienTai(lichSuMoi.length - 1);
  };

  const nhayDen = (buocDiMoi: number) => setBuocDiHienTai(buocDiMoi);

  const cacBuoc = lichSu.map((oChoi, buocDi) => (
    <li key={buocDi}>
      <button className="text-blue-500 hover:underline" onClick={() => nhayDen(buocDi)}>
        {buocDi > 0 ? `Đi đến bước #${buocDi}` : 'Quay lại đầu trò chơi'}
      </button>
    </li>
  ));

  return (
    <div className="tro-choi flex justify-center items-center h-screen">
      <div className="ban-co">
        <BanCo xChoi={xChoi} oChoi={oChoiHienTai} onChoi={xuLyChoi} />
      </div>
      <div className="thong-tin-choi ml-8">
        <ol>{cacBuoc}</ol>
      </div>
    </div>
  );
}

function kiemTraNguoiChienThang(oChoi: Array<string | null>): string | null {
  const mangChiThang = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7],
    [6, 7, 8],
    [7, 8, 9],
    [10, 11, 12],
    [11, 12, 13],
    [12, 13, 14],
    [15, 16, 17],
    [16, 17, 18],
    [17, 18, 19],
    [20, 21, 22],
    [21, 22, 23],
    [22, 23, 24],
    [0, 5, 10],
    [5, 10, 15],
    [10, 15, 20],
    [1, 6, 11],
    [6, 11, 16],
    [11, 16, 21],
    [2, 7, 12],
    [7, 12, 17],
    [12, 17, 22],
    [3, 8, 13],
    [8, 13, 18],
    [13, 18, 23],
    [4, 9, 14],
    [9, 14, 19],
    [14, 19, 24],
    [0, 6, 12],
    [6, 12, 18],
    [12, 18, 24],
    [4, 8, 12],
    [8, 12, 16],
    [12,16,20],
    [2, 6, 10],
    [10, 16, 22],
    [14, 18, 22],
    [2, 8, 14],
  ];

  for (let i = 0; i < mangChiThang.length; i++) {
    const [a, b, c] = mangChiThang[i];
    if (oChoi[a] && oChoi[a] === oChoi[b] && oChoi[a] === oChoi[c]) {
      return oChoi[a] as string;
    }
  }

  return null;
}

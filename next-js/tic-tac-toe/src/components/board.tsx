"use client";

import React, { useState } from "react";

type TBoard = Array<string | null>;

const getWin = (size: number): number[][] => {
  const combinations: number[][] = [];

  // Ngang
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size - 3; j++) {
      combinations.push(
        Array.from({ length: 3 }, (_, index) => i * size + j + index)
      );
    }
  }

  // Dọc
  for (let i = 0; i <= size - 3; i++) {
    for (let j = 0; j < size; j++) {
      combinations.push(
        Array.from({ length: 3 }, (_, index) => (i + index) * size + j)
      );
    }
  }

  // Chéo (trái đến phải)
  for (let i = 0; i <= size - 3; i++) {
    for (let j = 0; j <= size - 3; j++) {
      combinations.push(
        Array.from({ length: 3 }, (_, index) => (i + index) * size + j + index)
      );
    }
  }

  // Chéo (phải đến trái)
  for (let i = 0; i <= size - 3; i++) {
    for (let j = size - 1; j >= 2; j--) {
      combinations.push(
        Array.from({ length: 3 }, (_, index) => (i + index) * size + j - index)
      );
    }
  }

  return combinations;
};

const checkWin = (board: TBoard, size: number): string | null => {
  const Win = getWin(size);

  for (let i = 0; i < Win.length; i++) {
    const [a, b, c] = Win[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as string;
    }
  }

  return null;
};



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
  oChoi: TBoard;
  onChoi: (oChoiMoi: TBoard) => void;
  size: number;
}

function BanCo({ xChoi, oChoi, onChoi, size }: BanCoProps) {
  function xuLyClick(i: number) {
    if (oChoi[i] || checkWin(oChoi, size)) return;
    const oChoiMoi = oChoi.slice();
    oChoiMoi[i] = xChoi ? 'X' : 'O';
    onChoi(oChoiMoi);
  }

  const nguoiChienThang = checkWin(oChoi, size);
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
      <div className="grid" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {oChoi.map((giaTri, index) => (
          <OX key={index} giaTri={giaTri} onClick={() => xuLyClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default BanCo;

// MainPage.jsx
import { Routes, Route } from "react-router-dom";

function CurrentMemberPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600">반응형 Tailwind 성공! 🎉</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-white shadow-md rounded-xl p-6">Card 1</div>
        <div className="bg-white shadow-md rounded-xl p-6">Card 2</div>
      </div>
    </div>
  );
}

export default CurrentMemberPage;

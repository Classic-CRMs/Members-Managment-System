const SelectDate = () => {
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  return (
    <div className="grid grid-cols-3 gap-1 justify-center">
    <div className="w-full">
      <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">
        Date of birth
      </label>
      <select id="date" name="date" className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
        <option>DD</option>
        {days.map(date=><option key={date}>{date}</option>)}
      </select>
    </div>
    <div className="w-full">
      <label htmlFor="month" className="block mb-2 text-sm font-medium text-gray-700">
        .
      </label>
      <select id="month" name="month" className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
        <option>MM</option>
        {days.map(date=><option key={date}>{date}</option>)}
      </select>
    </div>
    <div className="w-full">
      <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-700">
        .
      </label>
      <select id="year" name="year" className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
        <option>YY</option>
        {days.map(date=><option key={date}>{date}</option>)}
      </select>
    </div>
    </div>
  );
};


export {SelectDate}
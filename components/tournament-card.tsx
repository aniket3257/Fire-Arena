import Link from 'next/link';

export default function TournamentCard() {
  return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900/50 to-zinc-950/90 border border-zinc-800 p-4 shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff5500] via-[#00d2ff] to-transparent" />
                  <div className="flex justify-between items-start mb-3">
                          <div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">BERMUDA</span>
                                              <h3 className="font-bold text-lg mt-1">SUNDAY GRIND EMPIRE</h3>
                                                      </div>
                                                              <div className="text-xs font-black px-2 py-1 rounded bg-[#00d2ff]/10 text-[#00d2ff]">● UPCOMING</div>
                                                                    </div>
                                                                          <div className="grid grid-cols-2 gap-2 my-4 bg-zinc-900/40 p-3 rounded-xl">
                                                                                  <div>
                                                                                            <p className="text-[10px] text-zinc-400 uppercase">Prize Pool</p>
                                                                                                      <p className="font-extrabold text-sm text-white">₹10,000</p>
                                                                                                              </div>
                                                                                                                      <div>
                                                                                                                                <p className="text-[10px] text-zinc-400 uppercase">Entry Fee</p>
                                                                                                                                          <p className="font-extrabold text-sm text-green-400">FREE</p>
                                                                                                                                                  </div>
                                                                                                                                                        </div>
                                                                                                                                                              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff5500] to-orange-600 text-black font-black text-sm tracking-wide">
                                                                                                                                                                      VIEW TOURNAMENT
                                                                                                                                                                            </button>
                                                                                                                                                                                </div>
                                                                                                                                                                                  );
                                                                                                                                                                                  }
                                                                                                                                                                                  